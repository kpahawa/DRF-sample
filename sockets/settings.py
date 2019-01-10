######################################################################
# File: sockets/settings.py
# Author: Karan
# Date Created: 12/21/2018
# Description: sample web sockets app as a chat application
#
#######################################################################
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CURR_DIR = os.path.dirname(__file__)

# TODO SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '+f0s-y9bi#0#+i!-9(lnuyc&1d^51*w5t%1zb!mxhq*_+urfue'

# TODO SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# TODO SECURITY WARNING: Set this value to False when going into production!

SESSION_SAVE_EVERY_REQUEST = True

# Application definition

INSTALLED_APPS = [
    # Rest framework
    'rest_framework',
    'corsheaders',
    # Django channels
    'channels',
    # Project applications
    'chat',
    # Django defaults
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

MIDDLEWARE = [
    # Added for Cross Origin requesrs
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'spa.middleware.SPAMiddleware',
]

STATICFILES_STORAGE = 'spa.storage.SPAStaticFilesStorage'

ROOT_URLCONF = 'sockets.urls'
ASGI_APPLICATION = "sockets.routing.application"
CHANNEL_LAYERS = {   # using a Redis backend as suggested by the documentation
    'default': {
        'BACKEND': 'channels_redis.core.RedisChannelLayer',
        'CONFIG': {
            "hosts": [('127.0.0.1', 6379)],
        },
    },
}

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'sockets.wsgi.application'


# Database
# https://docs.djangoproject.com/en/2.0/ref/settings/#databases
DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': os.environ.get('apps_ps_database_test'),
            'USER': os.environ.get('apps_ps_user_test'),
            'PASSWORD': os.environ.get('apps_ps_pass_test'),
            'HOST': os.environ.get('apps_ps_ip_test'),
            'PORT': os.environ.get('apps_ps_port_test'),
        }
    }

# Password validation
# https://docs.djangoproject.com/en/2.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

LANGUAGE_CODE = 'en-us'

USE_I18N = True

USE_L10N = True

USE_TZ = False

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
ANGULAR_APP_DIR = os.path.join(BASE_DIR, 'frontend/dist')

ALLOWED_HOSTS = '*'

STATICFILES_DIRS = [
    (os.path.join(ANGULAR_APP_DIR)),
]


REST_FRAMEWORK = {
    'DATETIME_FORMAT': "%m/%d/%Y %H:%M:%S",
    'DEFAULT_AUTHENTICATION_CLASSES': (
        # 'rest_framework_jwt.authentication.JSONWebTokenAuthentication',
        'rest_framework.authentication.BasicAuthentication',
    ),
    'DEFAULT_FILTER_BACKENDS': (
        'rest_framework.filters.SearchFilter',
        'django_filters.rest_framework.DjangoFilterBackend',
    ),
}

# Controlls external hosts that are allowed to get response from this domain
CORS_ORIGIN_ALLOW_ALL = True
CORS_ALLOW_CREDENTIALS = True

# Requred for djagngo contrib sites registration page
SITE_ID = 1
