# Generated by Django 2.0.7 on 2018-07-19 10:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogsite', '0003_post_author'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='created_on',
            field=models.DateTimeField(auto_now=True),
        ),
    ]