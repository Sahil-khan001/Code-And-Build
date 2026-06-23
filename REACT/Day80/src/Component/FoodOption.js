import { imageGridCards } from "../Utils/food"

export default function FoodOption() {

  return (
    <>
    
      <div className="max-w-[80%] container mx-auto mt-23">
        <h1 className="font-bold text-[21px]">
          Order Our best Food Options
        </h1>
      </div>

      <div className="max-w-[80%] container mx-auto mt-6 overflow-x-auto"> 
        <div className="grid grid-rows-2 grid-flow-col gap-2 w-max">  

          {
            imageGridCards.map((value) => {
              return (
                <div key={value.id}>
                  <a href={value?.action?.link}>
                    <img
                      className="w-36 h-42 object-cover"
                      src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/" +
                        value?.imageId
                      }
                    />
                  </a>
                </div>
              )
            })
          }

        </div>

      </div>

    </>
  )
}