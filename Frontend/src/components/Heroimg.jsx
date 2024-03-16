import Images from "../assets/images";

export default function Heroimg({ width }) {
  return (
    <div className='heroimg'>
        <img src={Images.Heroimg} width={width} alt="" />
    </div>
  )
}

