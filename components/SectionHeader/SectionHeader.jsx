import style from "./SectionHeader.scss"

const SectionHeader = (props) => (
  <div className={style.header_wrapper}>
    <div className={style.text_area}>
      <h2>
        {props.heading}
      </h2>
      {props.description ? 
        <span>
          <span>{props.description}</span>
        </span> : null
      }
    </div>
    {/* <hr className={style.hr}></hr> */}
  </div>
)

export default SectionHeader