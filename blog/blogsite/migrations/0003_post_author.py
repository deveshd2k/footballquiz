# Generated by Django 2.0.7 on 2018-07-19 10:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogsite', '0002_post_content'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='author',
            field=models.TextField(default=None),
        ),
    ]
