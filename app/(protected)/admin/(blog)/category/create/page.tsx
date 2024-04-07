import CategoryForm from '@/components/admin/category-form'
import React from 'react'

const CategoryPage = () => {
  return (
    <section className='max-w-3xl mx-auto'>
      <h1 className='font-bold text-2xl my-5'>Ajouter une catégorie</h1>
      <CategoryForm />
    </section>
  )
}

export default CategoryPage