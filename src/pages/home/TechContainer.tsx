export function TechContainer({title, techs}) {

  return (
    <div className={'mt-8'}>
      <div className={'font-semibold text-lg'}>{title}</div>
      <div className={'grid grid-cols-8 gap-4 mt-4'}>
        {
          techs.map((tech, idx) => {
            return (
              <div key={idx} className={'shadow-md p-4'}>
                <img src={tech.imgSrc} className={'aspect-auto'}/>
                <div className={'text-center mt-2 text-xs font-semibold'}>{tech.name}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}