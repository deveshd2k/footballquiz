# Generated by Django 2.0.7 on 2018-07-25 16:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogsite', '0008_user_final_score'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='password',
            field=models.CharField(max_length=250),
        ),
    ]