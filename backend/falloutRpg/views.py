
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.shortcuts import get_object_or_404, render
from rest_framework.permissions import IsAuthenticated
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.http import JsonResponse
import json
from .serializers import CharacterSerializer, InventoryItemSerializer, PerkSerializer, WeaponSerializer, ArmorSerializer
from .models import Character, Inventory_Item, Perk, Weapon, Armor
from .forms import CharacterCreationForm, AddInventoryForm, AddWeaponForm, AddArmorForm, UpdateCNDForm, LevelUpForm, UpdateAmmoForm


def index(request):
    return render(request, 'index.html')


def logout_view(request):
    logout(request)
    return JsonResponse({"success": True})


class Register(APIView):

    def post(self, request):
        user = User.objects.create_user(request.data)
        return Response(user.data, status=status.HTTP_201_CREATED)


@require_POST
@csrf_exempt
def login_view(request):
    request_json = json.loads(request.body)
    username = request_json.get('username')
    password = request_json.get('password')
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        return JsonResponse({"success": True})
    else:
        return JsonResponse({"success": False}, status=401)


class CharacterList(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        characters = Character.objects.filter(user=request.user)
        serializer = CharacterSerializer(characters, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CharacterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.user = request.user
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CharacterDetail(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, character_id):
        character = get_object_or_404(Character, pk=character_id)

        # Check if the character belongs to the authenticated user
        if character.user != request.user:
            return Response({"detail": "You do not have permission to perform this action."},
                            status=status.HTTP_403_FORBIDDEN)

        character.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class CharacterActive(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, character_id):
        character_to_activate = get_object_or_404(Character, pk=character_id)
        characters = Character.objects.filter(user=request.user)

        # Check if the character belongs to the authenticated user
        if character_to_activate.user != request.user:
            return Response({"detail": "You do not have permission to perform this action."},
                            status=status.HTTP_403_FORBIDDEN)

        # Set all characters to inactive
        for x in characters:
            characters[x].active = False

        # Then set selected character to active
        character_to_activate.active = True

        return Response(status=status.HTTP_200_OK)


# For updating condition or leveling up
class CharacterUpdate(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, character_id):
        character_to_edit = get_object_or_404(Character, pk=character_id)

        # Check if the character belongs to the authenticated user
        if character_to_edit.user != request.user:
            return Response({"detail": "You do not have permission to perform this action."},
                            status=status.HTTP_403_FORBIDDEN)

        serializer = CharacterSerializer(instance=character_to_edit, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class InventoryItemList(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, inventory_item_id):
        item = get_object_or_404(Weapon, pk=inventory_item_id)
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def get(self, request):
        items = Inventory_Item.objects.filter(user=request.user)
        data = InventoryItemSerializer(items, many=True).data
        return Response(data)

    def post(self, request):
        serializer = InventoryItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class WeaponList(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, weapon_id):
        weapon = get_object_or_404(Weapon, pk=weapon_id)
        weapon.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def get(self, request):
        weapons = Weapon.objects.filter(user=request.user)
        data = WeaponSerializer(weapons, many=True).data
        return Response(data)

    def post(self, request):
        serializer = WeaponSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# For updating weapon ammo
class WeaponUpdate(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, weapon_id):
        weapon_to_edit = get_object_or_404(Weapon, pk=weapon_id)

        serializer = WeaponSerializer(instance=weapon_to_edit, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ArmorList(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, armor_id):
        armor = get_object_or_404(Armor, pk=armor_id)
        armor.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def get(self, request):
        armors = Armor.objects.filter(user=request.user)
        data = ArmorSerializer(armors, many=True).data
        return Response(data)

    def post(self, request):
        serializer = ArmorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

