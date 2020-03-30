import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { CardOne } from "./CardOne"
import { CardTwo } from "./CardTwo"

export const App = () => {
	const titleColor = '#166F39';
	const subColor = '#000000';
	const btnTextColor = '#000000';
	const mainColor = '#8CFFBA';
	const lightColor= '#CFFFE2';
  const btnColor = '#FCED84';
  
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <CardOne
              title="Lemon"
              titleColor={titleColor}
              emoji={'🍋'}
              subtitle="This is a really tasty fruit"
              buttonText="Order Now"
              btnTextColor={btnTextColor}
              mainColor={mainColor}
              lightColor={lightColor}
              btnColor={btnColor}
              subColor={subColor}
            />
          </Route>

          <Route path="/Order Now">
            <CardTwo
              title="Lemon"
              mainColor={mainColor}
              titleColor={titleColor}
              emoji={'🍋'}
              lightColor={lightColor}
            />
          </Route>

        </Switch>

      </BrowserRouter>
    </div>
  )
}

