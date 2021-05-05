from django.test import TestCase

# Create your tests here.


class RegistroTestCase(TestCase):

    def test_url_register_status(self):
        url: '/registerClient/'
        response = self.client.get(url, form='json')
        self.assertEqual(response.status_code, 200)
