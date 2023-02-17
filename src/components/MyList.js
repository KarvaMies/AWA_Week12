import { useTranslation } from "react-i18next";

const MyList = ({ header , items, updateItem }) => {

  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("FrontInfo")}</h1>
      <h2>{header}</h2>
      <ol>
          {items.map((item) => (
              <li 
                key={item.id} 
                onClick={() => updateItem(item.id)} 
                style={{ textDecoration: item.clicked ? 'line-through' : ''}}
              >{item.text}
              </li>
          ))}
      </ol>
    </div>
  )
}

export default MyList