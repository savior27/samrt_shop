"use server";
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(formData) {
  const username = formData.get('username');
  const password = formData.get('password');

  const expectedUsername = process.env.ADMIN_USERNAME || 'admin';
  const expectedPassword = process.env.ADMIN_PASSWORD || 'admin123';

  if (username === expectedUsername && password === expectedPassword) {
    (await cookies()).set('admin_session', 'true', { httpOnly: true, path: '/' });
    redirect('/admin/products');
  } else {
    return { error: 'Invalid username or password' };
  }
}

export async function logout() {
  (await cookies()).delete('admin_session');
  redirect('/admin/login');
}
