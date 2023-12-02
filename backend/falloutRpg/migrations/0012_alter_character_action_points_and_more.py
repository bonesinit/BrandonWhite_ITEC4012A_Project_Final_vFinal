# Generated by Django 4.2.6 on 2023-10-31 14:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('falloutRpg', '0011_alter_character_other_effects_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='character',
            name='action_points',
            field=models.IntegerField(default=60),
        ),
        migrations.AlterField(
            model_name='character',
            name='critical_chance',
            field=models.IntegerField(default=5),
        ),
        migrations.AlterField(
            model_name='character',
            name='hit_points',
            field=models.IntegerField(default=1),
        ),
    ]