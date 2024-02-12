import { useMemo } from "react"
import mockdata from "../utils/mockdata"

import { useReactTable, getCoreRowModel, flexRender, } from "@tanstack/react-table"
import Button from "./Button"
import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"
import customFetch from "../utils/customFetch"
const productQueryObj = (obj) => {

  return {
    queryKey: ['products', {
      ...obj
    }],
    queryFn: async () => {
      const { data } = await customFetch.get(`/products`, {
        params: obj
      });
      return data;
    },

  }
}
const BasicTable = () => {
  console.log("my name is ako bate emmanuel")
  const query = Object.fromEntries(new URLSearchParams(window.location.search))
  console.log(`this is the formated string : ${1}`, query)
  /*
  cancel_price
  : 
  246.75
  product_category
  : 
  (4) ['cannabis', 'marijuana', 'crackers', 'platinum']
  product_images
  : 
  []
  product_imgUrl
  : 
  "https://weed.com/wp-content/uploads/2023/02/weed-satisfaction-smoke.jpg"
  product_name
  : 
  "fanatice"
  product_price
  : 
  235
  product_rating
  : 
  3
  total
  : 
  1
  */
  const productQuery = useQuery(productQueryObj({ name: "rose mary" }))

  const data = useMemo(() => productQuery.data?.products, [
    productQuery
  ])

  // const columns = [
  //   {
  //     header: "ID",
  //     accessorKey: "id",
  //     footer: "ID"
  //   },
  //   {
  //     header: "First Name",
  //     accessorKey: "first_name",
  //     footer: "First Name"
  //   },
  //   {
  //     header: "Last Name",
  //     accessorKey: "last_name",
  //     footer: "Last Name"
  //   },
  //   {
  //     header: "Email",
  //     accessorKey: "email",
  //     footer: "Email"
  //   },
  //   {
  //     header: "Gender",
  //     accessorKey: "gender",
  //     footer: "Gender",

  //   },
  //   {
  //     header: "ip address",
  //     accessorKey: "",
  //     footer: "ip address"
  //   },
  //   {
  //     header: "ip address",
  //     accessorKey: "ip_address",
  //     footer: "ip address",

  //     cell: info => <Link to={`?id=${info.getValue()}`}>clickbank</Link>
  //   },

  // ]
  const columns = [

    {
      header: "Product id",
      accessorKey: "product_name",
      footer: "Gender",
      cell: info => <div>{1}</div>
    },
    {
      header: "Product Name",
      accessorKey: "product_name",
      footer: "Gender",

    },
    {
      header: "ip address",
      accessorKey: "product_rating",
      footer: "ip address"
    },
    {
      header: "product price",
      accessorKey: "product_price",
      footer: "product price",

      cell: info => <Link to={`?id=${info.getValue()}`}>clickbank</Link>
    },

  ]
  const table = useReactTable(
    {
      data,
      columns, getCoreRowModel: getCoreRowModel()
    }
  )
  if (productQuery.isLoading) return "loading please wait ..."
  if (productQuery.isError) return "something went wrong s..."

  return (
    <div className="w-full overflow-x-auto">
      {JSON.stringify(query)}
      <table>
        {
          table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
            >
              {headerGroup.headers.map(header => <th key={header.id}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>)}
            </tr>
          ))
        }

        <tbody>
          {
            table.getRowModel().rows.map(row => (
              <tr
                key={row.id}
              >
                {row.getVisibleCells().map(cell => <td
                  key={cell.id}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())
                  }

                </td>)}
              </tr>
            ))
          }
          <tr>
            <td>
              1
            </td>
          </tr>

        </tbody>
        <tfoot>
          <tr>
            <td>foter here</td>
          </tr>
        </tfoot>

      </table>

    </div>
  )
}

export default BasicTable