import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <div className="flex gap-5">
        {[1,2,3].map(n => (
          <>
            <div className="card w-96 bg-base-100 shadow-md">
              <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default Home
