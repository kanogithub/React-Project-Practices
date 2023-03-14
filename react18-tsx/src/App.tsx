import { useState } from "react"
import { BsFillLightningChargeFill } from 'react-icons/bs'
import ListGroup from "./components/ListGroup"
import Alert from "./components/Alert"
import Button from "./components/Button"
import Like from "./components/Like"
import NavBar from "./components/NavBar"
import Cart from "./components/Cart"
import ExpandableText from "./components/ExpandableText"

type AlertType = 'primary' | 'secondary' | 'warning'

function App() {
  const [alertText, setAlertText] = useState('')
  const [alertColor, setAlertColor] = useState<AlertType>('primary')
  const [cartItems, setCartItems] = useState(['Product1', 'Product2'])
  const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris']

  // event handler
  const handleSelectItem = (text: string) => { console.log(text) }
  const changeAlert = (color: AlertType) => {
    setAlertColor(color)
    setAlertText(`${color[0].toLocaleUpperCase()}${color.slice(1)} Button`)
  }
  const handleClearItems = () => {
    setCartItems([])
  }

  return (
    <>
      <ListGroup items={items} heading={'City List'} onSelectItem={handleSelectItem} />
      {alertText && <Alert
        color={alertColor}
        onClose={() => setAlertText('')}>
        <b>{alertText}</b>
      </Alert>}
      <div className="m-1">
        <Button onButtonClick={() => changeAlert('primary')} />
        <Button type="secondary" onButtonClick={() => changeAlert('secondary')} />
        <Button type="warning" onButtonClick={() => changeAlert('warning')}>
          <BsFillLightningChargeFill size='18' />
          Click
        </Button>
      </div>
      <div className="m-2">
        <Like size={28} onClickEvent={() => console.log('Clicked')} />
      </div>
      <div className="m-2">
        <NavBar cartItemsCount={cartItems.length} />
        <Cart cartItems={cartItems} onClear={handleClearItems} />
      </div>
      <div className="m-2">
        <ExpandableText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima inventore labore, iusto optio maxime quibusdam facere incidunt commodi, doloremque sint minus cupiditate impedit dolore voluptates ullam animi quae ipsam possimus?
          Reiciendis distinctio nemo ipsum voluptate asperiores accusamus modi. Deleniti assumenda beatae voluptas, totam autem perferendis harum sed eligendi inventore odio id unde reiciendis ab vero, voluptatibus nam est dolor et.
          Sit possimus molestias corporis commodi quae! Reiciendis ad harum inventore iure perspiciatis voluptatum architecto nulla quia rem veniam dolorem fugit maxime minima assumenda alias voluptate natus facilis, animi a! Dolore!
          Culpa autem ipsum illo corporis soluta suscipit incidunt, accusamus neque quos accusantium veniam labore, perspiciatis reiciendis harum error numquam tempore id. Dolores perspiciatis hic tempore, voluptates in cum. Molestias, magnam!
          Provident ratione quaerat labore ab vero facilis quia unde nostrum consequuntur exercitationem modi ducimus id, voluptas molestiae temporibus facere sit nulla. Reiciendis dolorem facilis vitae quod porro consequuntur tempore ratione!
          Sunt, eos odit quaerat rem maxime nulla doloribus illum perspiciatis ipsum enim aliquid doloremque dicta ipsa consequatur quod nemo, exercitationem, adipisci architecto explicabo. Nulla earum repellat sequi, assumenda officia minus.
          Maiores, quibusdam culpa, ipsum veritatis at porro explicabo commodi quaerat cumque laborum debitis dolorum odio quis necessitatibus harum itaque consequuntur delectus libero dignissimos odit. Laudantium consequuntur non eaque quia et.
          Expedita voluptas tempore quo amet ab ad inventore, esse adipisci saepe similique placeat consectetur animi rerum praesentium ipsam ut? Aliquid facilis soluta aperiam eos veritatis odit tempore at repudiandae assumenda.
          Obcaecati delectus alias minus eaque aliquid impedit in, distinctio quibusdam vitae nobis, ratione cum velit praesentium voluptatibus placeat, nisi expedita. Voluptatibus facilis iure minima quae! Beatae ad recusandae totam cumque.
          Rerum eligendi nisi facilis, assumenda soluta dicta a quidem doloremque necessitatibus eum beatae expedita tenetur corporis dolorem consectetur aperiam blanditiis, architecto ducimus amet repellat, fugiat commodi labore! Quos, maxime dolorem.
        </ExpandableText>
      </div>
    </>
  )
}

export default App
