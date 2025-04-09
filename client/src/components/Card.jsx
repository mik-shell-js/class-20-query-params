export default function Card({ imgUri, title, children }) {

  return (
    <div className="bg-slate-200 max-w-xs p-4 rounded-lg space-y-3">
      <img className="rounded-sm" src={imgUri} alt="" />

      <div className="space-y-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p>
          {children}
        </p>
      </div>
    </div>
  )
}
