# Generated by Django 4.2.6 on 2023-10-21 19:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('falloutRpg', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='perk',
            name='skill_1_name',
            field=models.CharField(choices=[('BA', 'Barter'), ('EN', 'Energy Weapons'), ('EX', 'Explosives'), ('GU', 'Guns'), ('ME', 'Medicine'), ('ML', 'Melee Weapons'), ('RE', 'Repair'), ('SC', 'Science'), ('SN', 'Sneak'), ('SP', 'Speech'), ('SU', 'Survival'), ('UN', 'Unarmed')], default='BA', max_length=2),
        ),
        migrations.AlterField(
            model_name='perk',
            name='skill_2_name',
            field=models.CharField(choices=[('BA', 'Barter'), ('EN', 'Energy Weapons'), ('EX', 'Explosives'), ('GU', 'Guns'), ('ME', 'Medicine'), ('ML', 'Melee Weapons'), ('RE', 'Repair'), ('SC', 'Science'), ('SN', 'Sneak'), ('SP', 'Speech'), ('SU', 'Survival'), ('UN', 'Unarmed')], default='BA', max_length=2),
        ),
        migrations.AlterField(
            model_name='perk',
            name='special_skill_name',
            field=models.CharField(choices=[('ST', 'Strength'), ('PE', 'Perception'), ('EN', 'Endurance'), ('CH', 'Charisma'), ('IN', 'Intelligence'), ('AG', 'Agility'), ('LU', 'Luck')], default='ST', max_length=2),
        ),
    ]
