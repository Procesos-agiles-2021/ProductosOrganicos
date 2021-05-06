from django.test import TestCase
from model_mommy import mommy


class TestClientRegister(TestCase):

    def test_register_status(self):
        url = ''
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, 200)
