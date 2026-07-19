
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getProducts } from '../actions';
import AdminProductsClient from './AdminProductsClient';
import { logout } from '../auth';

export const dynamic = 'force-dynamic';

export default async function AdminProductsPage() {
  const session = (await cookies()).get('admin_session');
  
  if (!session || session.value !== 'true') {
    redirect('/admin/login');
  }

  const products = await getProducts();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Product Management</h1>
          <form action={logout}>
            <button type="submit" className="text-red-600 hover:text-red-700 font-medium">Logout</button>
          </form>
        </div>
        
        <AdminProductsClient initialProducts={products} />
      </div>
    </div>
  );
}
