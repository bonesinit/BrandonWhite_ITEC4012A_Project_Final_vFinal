from rest_framework import serializers
from .models import Character, Inventory_Item, Perk, Weapon, Armor


class CharacterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Character
        fields = '__all__'


class InventoryItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inventory_Item
        fields = '__all__'


class PerkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Perk
        fields = '__all__'


class WeaponSerializer(serializers.ModelSerializer):
    class Meta:
        model = Weapon
        fields = '__all__'


class ArmorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Armor
        fields = '__all__'
