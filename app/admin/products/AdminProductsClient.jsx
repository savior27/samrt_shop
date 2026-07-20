"use client";

import { useState } from 'react';
import { createProduct, updateProduct, deleteProduct } from '../actions';
import { Plus, Edit2, Trash2, X } from 'lucide-react';

export default function AdminProductsClient({ initialProducts }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [message, setMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = ['Living Room', 'Kitchen', 'Bedroom', 'Bathroom', 'Outdoor']; // Or derived from products

  const openAddModal = () => {
    setEditingProduct(null);
    setIsModalOpen(true);
  };

  const openEditModal = (product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 3000);
  };


  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const formData = new FormData(e.currentTarget);

  let res;

  if (editingProduct) {
    res = await updateProduct(editingProduct.id, formData);
  } else {
    res = await createProduct(formData);
  }

  if (res?.success) {
    showMessage(`✅ ${res.message}`);
    closeModal();
  } else {
    showMessage(`❌ ${res?.message || 'Something went wrong.'}`);
  }

  setIsSubmitting(false);
};

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      const res = await deleteProduct(id);
      if (res?.success) {
        showMessage(`✅ ${res.message}`);
      } else {
        showMessage(`❌ ${res?.message || 'Failed to delete.'}`);
      }
    }
  };

  return (
    <div>
      {message && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 z-50 font-medium">
          {message}
        </div>
      )}

      <div className="mb-6">
        <button 
          onClick={openAddModal}
          className="flex items-center gap-2 bg-gray-900 dark:bg-primary-600 hover:bg-gray-800 dark:hover:bg-primary-500 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-md"
        >
          <Plus className="w-5 h-5" />
          Add New Product
        </button>
      </div>

      {/* Product Table */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wider">
                <th className="p-4 font-semibold">Image</th>
                <th className="p-4 font-semibold">Product Name</th>
                <th className="p-4 font-semibold">Category</th>
                <th className="p-4 font-semibold">Price</th>
                <th className="p-4 font-semibold">Stock</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {initialProducts.length === 0 ? (
                <tr>
                  <td colSpan="7" className="p-8 text-center text-gray-500">No products found. Add some!</td>
                </tr>
              ) : initialProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
                  <td className="p-4">
                    <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-lg bg-gray-100" />
                  </td>
                  <td className="p-4 font-medium text-gray-900 dark:text-white">{product.name}</td>
                  <td className="p-4 text-gray-500 dark:text-gray-400">{product.category}</td>
                  <td className="p-4 font-bold text-gray-900 dark:text-gray-200">{product.price}</td>
                  <td className="p-4 text-gray-500">{product.stock}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      product.status === 'In Stock' 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <button onClick={() => openEditModal(product)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDelete(product.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 sm:p-6 pb-24">
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden relative">
              <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-100 dark:border-gray-800">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {editingProduct ? 'Edit Product' : 'Add New Product'}
                </h2>
                <button onClick={closeModal} className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            
           <form 
  onSubmit={handleSubmit}
  encType="multipart/form-data"
 className="p-4 sm:p-6"
>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">Product Name</label>
                  <input type="text" name="name" required defaultValue={editingProduct?.name} className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-primary-500 transition-all" />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">Category</label>
                  <select name="category" required defaultValue={editingProduct?.category || categories[0]} className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-primary-500 transition-all">
                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">Price (e.g., 500 ETB)</label>
                  <input type="text" name="price" required defaultValue={editingProduct?.price} className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-primary-500 transition-all" />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">Stock Quantity</label>
                  <input type="number" name="stock" min="0" required defaultValue={editingProduct?.stock || 0} className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-primary-500 transition-all" />
                </div>
              </div>

              <div className="space-y-2 mb-4 sm:mb-6">
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">Short Description</label>
                <input type="text" name="shortDescription" required defaultValue={editingProduct?.shortDescription || editingProduct?.description} className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-primary-500 transition-all" />
              </div>

              <div className="space-y-2 mb-4 sm:mb-6">
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">Full Description</label>
                <textarea name="fullDescription" rows="3" defaultValue={editingProduct?.fullDescription || editingProduct?.description} className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-y min-h-[80px]"></textarea>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">Product Image Upload</label>
                  <input type="file" name="image" accept="image/*" className="w-full text-xs sm:text-sm text-gray-500 file:mr-2 sm:file:mr-4 file:py-2 sm:file:py-2.5 file:px-3 sm:file:px-4 file:rounded-lg file:border-0 file:text-xs sm:file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100 dark:file:bg-gray-800 dark:file:text-white" />
                  {editingProduct && <p className="text-xs text-gray-500 mt-1">Leave empty to keep current image</p>}
                </div>

                <div className="flex flex-col gap-4 sm:justify-center">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" name="featured" defaultChecked={editingProduct?.featured} className="w-5 h-5 rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                    <span className="font-bold text-sm sm:text-base text-gray-700 dark:text-gray-300">Featured Product</span>
                  </label>

                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">Status</label>
                    <select name="status" defaultValue={editingProduct?.status || 'In Stock'} className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-primary-500">
                      <option value="In Stock">In Stock</option>
                      <option value="Out of Stock">Out of Stock</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-4 sm:pt-6 border-t border-gray-100 dark:border-gray-800">
                <button type="button" onClick={closeModal} className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-bold text-gray-700 dark:text-gray-300 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors">
                  Cancel
                </button>
                <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-bold text-white bg-gray-900 dark:bg-primary-600 hover:bg-gray-800 dark:hover:bg-primary-500 transition-colors shadow-md disabled:opacity-50">
                  {isSubmitting ? 'Saving...' : editingProduct ? 'Update Product' : 'Save Product'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
