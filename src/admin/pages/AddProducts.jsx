import React from 'react'

export const AddProducts = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg w-full max-w-2xl p-6">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Add Product</h1>

        {/* {error && <p className="text-red-500 text-sm">{error}</p>} */}

        <form /*onSubmit={handleSubmit}*/ className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
            //   onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-600">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
            //   onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-600">
              Description
            </label>
            <textarea
              id="description"
              name="description"
            //   onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            />
          </div>

          <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-600">
                Image URL
            </label>
            <input
                type="text"
                id="image"
                name="image"
                // onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter image URL"
                required
            />
            {/* {product.image && (
                <img
                src={product.image}
                alt="Product Preview"
                className="mt-4 w-32 h-32 object-cover rounded-md"
                />
            )} */}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all"
            // disabled={loading}
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  )
}
