import Images from "../assets/images";

export default function Logo({ width }) {
  return (
    <div className='logo'>
        <img src={Images.Logo} width={width} alt="" />
    </div>
  )
}

export function Heroimg({ width }) {
  return (
    <div className="heroimg">
        <img src={Images.Heroimg} width={width} alt="" />
    </div>
  )
}
