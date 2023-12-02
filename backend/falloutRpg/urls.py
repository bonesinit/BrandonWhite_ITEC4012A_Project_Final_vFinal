from django.urls import path
from .views import index, login_view, logout_view, CharacterList, CharacterDetail, CharacterActive, CharacterUpdate, InventoryItemList, WeaponList, WeaponUpdate, ArmorList, Register

urlpatterns = [
    path('', index),
    path('login/', login_view, name='login'),
    path('logout/', logout_view, name='logout'),
    path('register/', Register.as_view(), name='register'),
    path('characters/', CharacterList.as_view(), name='character-list'),
    path('characters/<int:character_id>/', CharacterDetail.as_view(), name='character-detail'),
    path('characters/<int:character_id>/active/', CharacterActive.as_view(), name='character-active'),
    path('characters/<int:character_id>/update/', CharacterUpdate.as_view(), name='character-update'),
    path('inventory/', InventoryItemList.as_view(), name='inventory-list'),
    path('weapons/', WeaponList.as_view(), name='weapon-list'),
    path('weapons/update/', WeaponUpdate.as_view(), name='weapon-update'),
    path('armors/', ArmorList.as_view(), name='armor-list'),
]