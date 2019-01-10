$(document).ready(function () {
    $('.ui.dropdown').dropdown();
    $('.top.menu .item').tab();
    $('.tabular.menu .item').tab();

    $('.ui.form').form({
        fields: {
            username: {
                identifier: 'username',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter your username'
                    }
                ]},
            password: {
                identifier: 'password',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter your password'
                    },
                    {
                        type: 'length[1]',
                        prompt: 'Your password must be at least 1 character'
                    }
                ]}
        }
    });
});

