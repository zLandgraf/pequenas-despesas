import type { NextPage } from 'next'

const Empenhos: NextPage = () => {
  return (
    <>
      <div className="flex gap-5 px-2 py-5">
        <div className="card w-96 bg-base-100 shadow-md rounded-md">
          <div className="py-5 px-7">
            <h2 className="card-title">Empenho 123/2022</h2>
            <div className="card-actions justify-end mt-5">
              <button className="btn btn-sm">Lançamentos</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Empenhos