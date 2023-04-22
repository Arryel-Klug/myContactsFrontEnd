import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts/6d9364ae-f465-4f99-9cf9-6ea1e7f21efd?orderBy=${orderBy}`);
  }
}

export default new ContactsService();
