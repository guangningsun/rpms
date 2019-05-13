# Generated by Django 2.1.5 on 2019-02-07 09:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('TestModel', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='AddressInfo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address_id', models.CharField(max_length=200)),
                ('address_province', models.CharField(max_length=200)),
                ('address_city', models.CharField(max_length=200)),
                ('address_street', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='UserInfo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=200)),
                ('password', models.CharField(max_length=200)),
                ('user_email', models.CharField(max_length=200)),
                ('user_address', models.CharField(max_length=200)),
                ('user_phone', models.CharField(max_length=200)),
            ],
        ),
        migrations.DeleteModel(
            name='Assets',
        ),
        migrations.DeleteModel(
            name='DeviceInfo',
        ),
        migrations.DeleteModel(
            name='Test',
        ),
    ]
