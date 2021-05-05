from django.test import TestCase
from djangp.urls import reverse


class TestViews(TestCase):

    def test_should_show_register_page(self):
        self.client.get(reverse('registerClient/'))
