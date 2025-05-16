import React from 'react'
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { FaShoppingCart, FaStarHalfAlt } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Allproduct = () => {
    const product = 
        [
            // Cookware (10 products)
            {
              "product_id": "TC001",
              "product_real_scenario_url": "https://tse2.mm.bing.net/th?id=OIP.9EPotX0hFDkD5FakkTTSUwHaHa&pid=Api&P=0&h=180",
              "product_category": "cookware",
              "product_name": "Terracotta Deep Cooking Pot",
              "product_actual_price": 1450.00,
              "product_maximum_price": 1700.00,
              "product_rating": 4.4
            },
            {
                "product_id": "TC002",
                "product_real_scenario_url": "https://tse4.mm.bing.net/th?id=OIP.xno_aoKKl5owdBerafs21AHaJ4&pid=Api&P=0&h=180",
                "product_category": "kitchenessential",
                "product_name": "Terracotta Cooling Water Jug",
                "product_actual_price": 650.00,
                "product_maximum_price": 800.00,
                "product_rating": 4.1
              },
              {
                "product_id": "TC003",
                "product_real_scenario_url": "https://tse3.mm.bing.net/th?id=OIP.UCT6h_jyTLtb-k4FbktwCgHaHa&pid=Api&P=0&h=180",
                "product_category": "kitchenessential",
                "product_name": "Terracotta Curd Setter",
                "product_actual_price": 850.00,
                "product_maximum_price": 1000.00,
                "product_rating": 4.3
              },
              {
                "product_id": "TC004",
                "product_real_scenario_url": "https://tse1.mm.bing.net/th?id=OIP.5vRs-BO1ERsXnjBruUPsFgHaFj&pid=Api&P=0&h=180",
                "product_category": "kitchenessential",
                "product_name": "Terracotta Spice Jar",
                "product_actual_price": 300.00,
                "product_maximum_price": 400.00,
                "product_rating": 4.0
              },
            {
              "product_id": "TC004",
              "product_real_scenario_url": "https://tse4.mm.bing.net/th?id=OIP.stFi_jFkR7zCXaf_6MgM8gHaFv&pid=Api&P=0&h=180",
              "product_category": "cookware",
              "product_name": "Terracotta Tava",
              "product_actual_price": 900.00,
              "product_maximum_price": 1100.00,
              "product_rating": 4.0
            },
            {
              "product_id": "TC005",
              "product_real_scenario_url": "https://tse3.mm.bing.net/th?id=OIP.POqJCIrY2sRLDyiAufAifgHaEK&pid=Api&P=0&h=180",
              "product_category": "cookware",
              "product_name": "Terracotta Kadai",
              "product_actual_price": 1300.00,
              "product_maximum_price": 1500.00,
              "product_rating": 4.5
            },
            {
              "product_id": "TC006",
              "product_real_scenario_url": "https://tse2.mm.bing.net/th?id=OIP.9EPotX0hFDkD5FakkTTSUwHaHa&pid=Api&P=0&h=180",
              "product_category": "cookware",
              "product_name": "Terracotta Roasting Pan",
              "product_actual_price": 1750.00,
              "product_maximum_price": 2000.00,
              "product_rating": 4.7
            },
            {
              "product_id": "TC007",
              "product_real_scenario_url": "https://tse4.mm.bing.net/th?id=OIP.nCxXL2HE5pOpIb9xbxR0LwHaFc&pid=Api&P=0&h=180",
              "product_category": "cookware",
              "product_name": "Terracotta Sauce Pot",
              "product_actual_price": 1100.00,
              "product_maximum_price": 1300.00,
              "product_rating": 4.3
            },
            {
              "product_id": "TC008",
              "product_real_scenario_url": "https://tse4.mm.bing.net/th?id=OIP.pnwS5WXLqvpg0iFs63lUDgHaHa&pid=Api&P=0&h=180",
              "product_category": "cookware",
              "product_name": "Terracotta Griddle",
              "product_actual_price": 950.00,
              "product_maximum_price": 1150.00,
              "product_rating": 4.1
            },
            {
              "product_id": "TC009",
              "product_real_scenario_url": "https://tse3.mm.bing.net/th?id=OIP.Z7VVcQ5Q4--ZpwUT7IwrkgHaEB&pid=Api&P=0&h=180",
              "product_category": "cookware",
              "product_name": "Terracotta Baking Dish",
              "product_actual_price": 1400.00,
              "product_maximum_price": 1650.00,
              "product_rating": 4.5
            },
            {
              "product_id": "TC010",
              "product_real_scenario_url": "https://tse4.mm.bing.net/th?id=OIP._5NFmIYnttYRK8dIXPIUYAHaIi&pid=Api&P=0&h=180",
              "product_category": "cookware",
              "product_name": "Terracotta Soup Pot",
              "product_actual_price": 1550.00,
              "product_maximum_price": 1800.00,
              "product_rating": 4.6
            },
            {
                "product_id": "TC011",
                "product_real_scenario_url": "https://tse2.mm.bing.net/th?id=OIP.MYqMplwnvjat4tukD1cbxQHaHa&pid=Api&P=0&h=180",
                "product_category": "cookware",
                "product_name": "Terracotta Fry Pan",
                "product_actual_price": 1200.00,
                "product_maximum_price": 1400.00,
                "product_rating": 4.2
              },
              {
                "product_id": "TC012",
                "product_real_scenario_url": "https://tse2.mm.bing.net/th?id=OIP.3EppOGJbaKpOeAmFqap4OwHaHv&pid=Api&P=0&h=180",
                "product_category": "cookware",
                "product_name": "Terracotta Steamer",
                "product_actual_price": 1600.00,
                "product_maximum_price": 1900.00,
                "product_rating": 4.6
              },
              {
                "product_id": "TC013",
                "product_real_scenario_url": "https://tse2.mm.bing.net/th?id=OIP.2O0aGrwg83eTSGfahZow8AHaEz&pid=Api&P=0&h=180",
                "product_category": "cookware",
                "product_name": "Terracotta Tava",
                "product_actual_price": 900.00,
                "product_maximum_price": 1100.00,
                "product_rating": 4.0
              },
            {
              "product_id": "TC014",
              "product_real_scenario_url": "https://tse2.mm.bing.net/th?id=OIP.Hv9Y96m-O534Dx88jiyzZwHaE6&pid=Api&P=0&h=180",
              "product_category": "kitchenessential",
              "product_name": "Terracotta Oil Dispenser",
              "product_actual_price": 450.00,
              "product_maximum_price": 600.00,
              "product_rating": 4.2
            },
            {
              "product_id": "TC015",
              "product_real_scenario_url": "https://tse3.mm.bing.net/th?id=OIP.vdZ1jme-EDZIr1vmWFtiAgHaHa&pid=Api&P=0&h=180",
              "product_category": "kitchenessential",
              "product_name": "Terracotta Storage Pot",
              "product_actual_price": 700.00,
              "product_maximum_price": 850.00,
              "product_rating": 4.4
            },
            {
              "product_id": "TC016",
              "product_real_scenario_url": "https://tse1.mm.bing.net/th?id=OIP.90eeWXQcgDetyNKoQW7OYQHaFj&pid=Api&P=0&h=180",
              "product_category": "kitchenessential",
              "product_name": "Terracotta Mortar and Pestle",
              "product_actual_price": 550.00,
              "product_maximum_price": 700.00,
              "product_rating": 4.5
            },
            {
              "product_id": "TC017",
              "product_real_scenario_url": "https://tse4.mm.bing.net/th?id=OIP.s4CnPNTZ5ts83Whk75ZchAHaJQ&pid=Api&P=0&h=180",
              "product_category": "kitchenessential",
              "product_name": "Terracotta Butter Pot",
              "product_actual_price": 400.00,
              "product_maximum_price": 500.00,
              "product_rating": 4.1
            },
            {
              "product_id": "TC018",
              "product_real_scenario_url": "https://tse3.mm.bing.net/th?id=OIP.z_R7-lALkkgEp8jIN0nwugHaHa&pid=Api&P=0&h=180",
              "product_category": "kitchenessential",
              "product_name": "Terracotta Pickle Jar",
              "product_actual_price": 600.00,
              "product_maximum_price": 750.00,
              "product_rating": 4.3
            },
            {
              "product_id": "TC019",
              "product_real_scenario_url": "https://tse4.mm.bing.net/th?id=OIP.8G0pI-wFsj7WwxDt11dsKQHaHa&pid=Api&P=0&h=180",
              "product_category": "kitchenessential",
              "product_name": "Terracotta Salt Container",
              "product_actual_price": 350.00,
              "product_maximum_price": 450.00,
              "product_rating": 4.0
            },
            {
              "product_id": "TC020",
              "product_real_scenario_url": "https://tse1.mm.bing.net/th?id=OIP.pqkOVZDbhHKwzmcLN04HhwHaHa&pid=Api&P=0&h=180",
              "product_category": "plant grow",
              "product_name": "Terracotta Herb Pot",
              "product_actual_price": 500.00,
              "product_maximum_price": 650.00,
              "product_rating": 4.2
            },
            {
              "product_id": "TC021",
              "product_real_scenario_url": "https://tse1.mm.bing.net/th?id=OIP.aZP8o6K8BbYWuVjHQM7PWQHaJ4&pid=Api&P=0&h=180",
              "product_category": "kitchenessential",
              "product_name": "Terracotta Water Bottle",
              "product_actual_price": 750.00,
              "product_maximum_price": 900.00,
              "product_rating": 4.4
            },
          
            // Dinnerset (5 products)
            {
              "product_id": "TC022",
              "product_real_scenario_url": "https://tse2.mm.bing.net/th?id=OIP.zSmZWxZDim_QNu3qHTKzPQHaGq&pid=Api&P=0&h=180",
              "product_category": "dinnerset",
              "product_name": "Terracotta Rustic Dinner Set (4 Pieces)",
              "product_actual_price": 2600.00,
              "product_maximum_price": 2900.00,
              "product_rating": 4.8
            },
            {
              "product_id": "TC023",
              "product_real_scenario_url": "https://tse3.mm.bing.net/th?id=OIP.9nQ9aDOtqIOZfU74fd74NQAAAA&pid=Api&P=0&h=180",
              "product_category": "dinnerset",
              "product_name": "Terracotta Plate Set (6 Pieces)",
              "product_actual_price": 2200.00,
              "product_maximum_price": 2500.00,
              "product_rating": 4.7
            },
            {
              "product_id": "TC024",
              "product_real_scenario_url": "https://tse2.mm.bing.net/th?id=OIP.LdHKmFFrEyeBQF4398Y7uQHaEI&pid=Api&P=0&h=180",
              "product_category": "dinnerset",
              "product_name": "Terracotta Bowl Set (4 Pieces)",
              "product_actual_price": 1800.00,
              "product_maximum_price": 2100.00,
              "product_rating": 4.5
            },
            {
              "product_id": "TC025",
              "product_real_scenario_url": "https://tse1.mm.bing.net/th?id=OIP.aUm5KtIgj-WtnoQtxb6oUQHaHa&pid=Api&P=0&h=180",
              "product_category": "dinnerset",
              "product_name": "Terracotta Serving Set (3 Pieces)",
              "product_actual_price": 1500.00,
              "product_maximum_price": 1750.00,
              "product_rating": 4.6
            },
            {
              "product_id": "TC026",
              "product_real_scenario_url": "https://tse4.mm.bing.net/th?id=OIP.TKkP2SQDUqQd8YFXyfNkMwHaGq&pid=Api&P=0&h=180",
              "product_category": "dinnerset",
              "product_name": "Terracotta Full Dinner Set (12 Pieces)",
              "product_actual_price": 4500.00,
              "product_maximum_price": 5000.00,
              "product_rating": 4.9
            },
          
            // Mask (4 products)
            {
              "product_id": "TC027",
              "product_real_scenario_url": "https://tse2.mm.bing.net/th?id=OIP.Rn258M6BiVS6jaODJDJCCgHaGD&pid=Api&P=0&h=180",
              "product_category": "mask",
              "product_name": "Terracotta Wall Mask (Tribal Design)",
              "product_actual_price": 800.00,
              "product_maximum_price": 950.00,
              "product_rating": 4.3
            },
            {
              "product_id": "TC028",
              "product_real_scenario_url": "https://tse1.mm.bing.net/th?id=OIP.b7J1jKEY_MHFcy0vkpekegHaIZ&pid=Api&P=0&h=180",
              "product_category": "mask",
              "product_name": "Terracotta Floral Mask",
              "product_actual_price": 700.00,
              "product_maximum_price": 850.00,
              "product_rating": 4.2
            },
            {
              "product_id": "TC029",
              "product_real_scenario_url": "https://tse3.mm.bing.net/th?id=OIP.no7Er9yckDiGNSh91htccAHaFB&pid=Api&P=0&h=180",
              "product_category": "mask",
              "product_name": "Terracotta Animal Mask",
              "product_actual_price": 900.00,
              "product_maximum_price": 1100.00,
              "product_rating": 4.4
            },
            {
              "product_id": "TC030",
              "product_real_scenario_url": "https://tse4.mm.bing.net/th?id=OIP.c9JubVByckdMbMUhfJlU1gHaJr&pid=Api&P=0&h=180",
              "product_category": "mask",
              "product_name": "Terracotta Abstract Mask",
              "product_actual_price": 850.00,
              "product_maximum_price": 1000.00,
              "product_rating": 4.5
            },
          
            // Holder (2 products)
            {
              "product_id": "TC031",
              "product_real_scenario_url": "https://tse2.mm.bing.net/th?id=OIP.WaEYs6ky8zV6hDNDJOhuoQHaFw&pid=Api&P=0&h=180",
              "product_category": "holder",
              "product_name": "Terracotta Candle Holder",
              "product_actual_price": 350.00,
              "product_maximum_price": 450.00,
              "product_rating": 4.1
            },
            {
              "product_id": "TC032",
              "product_real_scenario_url": "https://tse4.mm.bing.net/th?id=OIP.41stZJcg0Zdf7Awl9jui5gHaHZ&pid=Api&P=0&h=180",
              "product_category": "holder",
              "product_name": "Terracotta Plant Holder",
              "product_actual_price": 500.00,
              "product_maximum_price": 600.00,
              "product_rating": 4.3
            },
          
            // Handi (1 product)
            {
              "product_id": "TC033",
              "product_real_scenario_url": "https://tse1.mm.bing.net/th?id=OIP.MbT4CWsLbVIdfgZHrdAHdQHaFU&pid=Api&P=0&h=180",
              "product_category": "handi",
              "product_name": "Terracotta Handi with Lid",
              "product_actual_price": 1200.00,
              "product_maximum_price": 1400.00,
              "product_rating": 4.6
            },
          
            // Pen Stand (1 product)
            {
              "product_id": "TC034",
              "product_real_scenario_url": "https://tse4.mm.bing.net/th?id=OIP.QvFVKa3Islgb9wlQXwq5uQHaFm&pid=Api&P=0&h=180",
              "product_category": "pen stand",
              "product_name": "Terracotta Pen Stand",
              "product_actual_price": 250.00,
              "product_maximum_price": 350.00,
              "product_rating": 4.0
            }
          ]
  return (
      <div className='main-container'>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 mt-16 mb-7'>
        {
      product.map((card) =>{
      return(
     <div className="bg-white shadow-sm shadow-slate-500 p-3 relative group">
      <div key={card.product_id}>
        <div className='flex flex-row justify-between'>
        <div className='z-0 group-hover:z-20'>
           <NavLink href="/" className='text-yellow-600 text-2xl right-9'>
           <AiFillHeart className=''/>
           </NavLink> 
           <NavLink href="/"  className='text-yellow-600 text-2xl'>
           <AiFillEye />
           </NavLink>
        </div>
        </div>
        <div className='object-cover flex w-full justify-center'>
          <img src={card.product_real_scenario_url} className='w-32 aspect-square py-4 group-hover:scale-110 duration-200' />
        </div>
        <div className='flex flex-row justify-between'>
          <div className='py-2'>
              <span className='text-blue-400 capitalize'>Category:</span>
              <h6 className='capitalize text-sm'>{card.product_category}</h6>
          </div>
          <div className='bg-green-500 max-w-min max-h-min px-1 text-nowrap'>
              Instock
          </div>
        </div>
        <div className='pb-1 font-semibold capitalize'>
          {card.product_name}
        </div>
        <div className='text-yellow-400'>
        <FaStarHalfAlt />
        </div>
        <div className='flex flex-row justify-between'>
          <div>
       <span className='font-bold text-base pr-3'>&#x20b9;{card.product_actual_price}</span>
       <span className='line-through'>&#x20b9;{card.product_maximum_price}</span>
       </div>
       <div className='text-blue-800 border-2 border-blue-800 p-2 rounded-md group-hover:bg-blue-800 group-hover:text-white duration-200'>
       <FaShoppingCart />
       </div>
        </div>
      </div>
    </div>
    )
    })
   }    
        </div>
      </div>
  )
}

export default Allproduct
