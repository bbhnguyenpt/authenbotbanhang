import SelectLanguage from "@/components/authentication-modal/SelectLanguage"

const Actions = () => {
  return (
    <div className="flex justify-between pt-3">
      <p className="flex items-center gap-3">
        <span className="text-xs text-slate-500 hover:cursor-pointer hover:underline">
          Privacy
        </span>
        <span className="text-xs text-slate-500 cursor-pointer hover:underline">
          Terms
        </span>
      </p>
      <SelectLanguage />
    </div>
  )
}

export default Actions
