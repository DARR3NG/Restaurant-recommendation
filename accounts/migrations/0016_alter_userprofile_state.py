# Generated by Django 4.2 on 2023-05-02 22:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0015_rename_address_1_userprofile_address_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='state',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]