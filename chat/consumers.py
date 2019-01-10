from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
import json


class ChatConsumer(WebsocketConsumer):
    # it is possible to write this as an async websocket consumer:
    # https://channels.readthedocs.io/en/latest/tutorial/part_3.html

    def connect(self):
        # the scope contains info about the connection - including authenticated user
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = 'chat_%s' % self.room_name

        # Join room group
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )

        self.accept()

    def disconnect(self, close_code):
        # Leave room group
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )

    def receive(self, text_data=None, bytes_data=None):
        if text_data:
            text_data_json = json.loads(text_data)
            message = text_data_json.get('message')
            sender = text_data_json.get('sender')
            if message:
                async_to_sync(self.channel_layer.group_send)(
                    self.room_group_name,
                    {
                        'type': 'chat_message',
                        'message': message,
                        'sender': sender
                    }
                )
            else:
                print("INVALID MESSAGE. Text Data {}".format(text_data))
        else:
            print("NO TEXT DATA RECEIVED. Text data: {}. Bytes data: {}".format(text_data, bytes_data))

    # Receive message from room group
    def chat_message(self, event):
        message = event.get('message')
        sender = event.get('sender')
        if message and sender:
            # Send message to WebSocket
            self.send(text_data=json.dumps({'message': message, 'sender': sender}))
        else:
            print("INVALID MESSAGE. message {}. Event: {}".format(message, event))
