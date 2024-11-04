type Props = {
    starNumber: number;
  }
const RateStar = ({starNumber}:Props) => {
  return (
    <div className="flex gap-1 items-center">
      {Array.from({ length: 5 }, (_, index) => (
        <div key={index}>
          {index < starNumber ? (
              <img src="/images/ICONS/Star.svg" />
          ): (
            <img src="/images/ICONS/Star-gray.svg" />
          )}
        </div>
      ))}
    </div>
  )
}

export default RateStar