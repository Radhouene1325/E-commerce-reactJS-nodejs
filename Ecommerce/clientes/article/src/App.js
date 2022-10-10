import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import RouteUser from "./user/Route/RouteUser";
import RouteAdmin from "./admin/RouteAdmin/RouteAdmin";

let LazyRouteUser = React.lazy(() => import('./user/Route/RouteUser'))

let LazyRouteAdmin = React.lazy(() => import('./admin/RouteAdmin/RouteAdmin'))






const App = () => {



  return (
    <React.Fragment>
      <React.Suspense fullback="hello">
        <LazyRouteUser />

      </React.Suspense>

      <React.Suspense fullback="hello">
        <LazyRouteAdmin />

      </React.Suspense>


    </React.Fragment>


  )
}

export default App





// <Container>
//         <Wrapper>
//           <Title>Sign in</Title>
//           <SubTitle>to continue to LamaTube</SubTitle>
//           {/* <Input
//             placeholder="username"
//             onChange={(e) => setUser({ ...user, name: e.target.value })}
//           /> */}
//           <Input
//             type="email"
//             placeholder="email"
//             onChange={(e) => setUser({ ...user, email: e.target.value })}
//           />
//           <Input
//             type="password"
//             placeholder="password"
//             onChange={(e) => setUser({ ...user, password: e.target.value })}
//           />
//           <Button onClick={handleLogin}>Sign in</Button>


//         </Wrapper>
//         <More>
//           English(USA)
//           <Links>
//             <Link>Help</Link>
//             <Link>Privacy</Link>
//             <Link>Terms</Link>
//           </Links>
//         </More>
//       </Container>