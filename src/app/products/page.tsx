'use client'

import { useEffect, useState } from "react";
import { Product } from "../types/products";
import axios from "axios";
import Card from "../components/card";
import { useProductStore } from "../store/useProductStore";


function ProductPage(){
    const {
        products,
        loading,
        error,
        hasMore,
        fetchProducts,
    } = useProductStore()

    useEffect(() => {
        if (products.length === 0) {
            fetchProducts()
        }
    }, [fetchProducts, products.length])
    
    if (error) {
        return <p className="p-6 text-red-500">{error}</p>
    }

    return <>
    <div className="flex justify-center">
        <div className="p-6 max-w-11/12">
            <h1 className="text-2xl font-bold mb-4 text-center">Products</h1>

            {/* Card grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {products.map((product) => (
                <Card key={product.id} product={product} />
                ))}
            </div>

            {/* Load more */}
            <div className="flex justify-center mt-6">
                {hasMore ? (
                    <button
                        onClick={fetchProducts}
                        disabled={loading}
                        className="px-6 py-2 border rounded"
                    >
                        {loading ? 'Loading...' : 'Load More'}
                    </button>
                ) : (
                    <p className="text-gray-500">No more products</p>
                )}
            </div>
        </div>
    </div>
    </>
}

export default ProductPage;