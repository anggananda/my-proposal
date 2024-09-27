import React from 'react'

const Message = ({message, next}) => {
  return (
    <div className="flex flex-col gap-2 mt-4">
            {next > 0 &&
              message.slice(0, next).map((msg, index) => (
                <div
                  key={index}
                  className="p-4 rounded-md border shadow-md border-[rgba(0,0,0,0.2)] bg-white bg-opacity-70"
                >
                  <p className="font-extralight font-poppins text-sm md:text-lg">{msg}</p>
                </div>
              ))}
          </div>
  )
}

export default Message