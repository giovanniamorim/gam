import { CCard, CCardBody, CCol, CRow } from '@coreui/react';
import React from 'react';
import EvolucaoImg from '../../assets/images/evolucao.webp';
import TeamImg from '../../assets/images/team_autonomos.webp'
import '../../scss/_custom.scss';

const IntroducaoMicrofrontend = () => {
  return (
    <CRow className="mb-4">
      <CCol xs={12}>
        <CCard className="mb-4">

        <CCardBody>
  <h4>Micro-Frontends (Overview)</h4>
  <hr />
    <p>With the size and complexity of software systems, it is common to primarily use a monolithic architecture, a frontend and backend architecture, or a microservices architecture. For large and complex software systems, the current trend is to build a feature-rich and powerful browser application, also known as a Single Page Application (SPA), which relies on a microservices architecture.</p>
    <p>In this scenario, there are separate teams for backend implementations for each functionality. They build their own backend microservices for specific functionalities, and the frontend team needs to work in relation to all the features.</p>
    <p>Over time, the frontend layer, often developed by a separate team, grows and becomes more difficult to maintain. This is what we call a Monolithic Frontend.</p>
    <p>The idea behind Micro Frontends is to think of a website or web application as a composition of features owned by independent teams.</p>

    <img src={EvolucaoImg} alt="Evolution" className="img-fluid mb-3 center-img"  />

    <h4>Main Ideas of Micro Frontends</h4>

    <h5>1. Be Technologically Neutral</h5>
    <p>Each team should be able to choose and update its technology stack without needing to coordinate with other teams. Custom Elements are a great way to hide implementation details, providing a neutral interface for others.</p>

    <h5>2. Isolate Team Code</h5>
    <p>Do not share a runtime, even if all teams use the same framework. Build independent, self-contained applications. Do not rely on shared states or global variables.</p>

    <h5>3. Prefer Native Browser Features over Custom APIs</h5>
    <p>Use browser events for communication instead of building a global publish-subscribe (PubSub) system. If you really need to create an API between teams, try to keep it as simple as possible.</p>

    <h5>4. Build a Resilient Site</h5>
    <p>Your functionality should be useful even if JavaScript fails or has not yet executed. Use Universal Rendering and Progressive Enhancement to improve perceived performance.</p>

    <h4>Benefits of Micro Frontends</h4>

    <h5>1. Incremental Updates</h5>
    <p>For many organizations, this marks the beginning of their journey with micro frontends. The old and large monolithic frontend is being held back by an outdated technology stack or by code written under delivery pressure, and it is reaching a point where a complete rewrite is tempting. To avoid the dangers of a full rewrite, we prefer to strangle the old application piece by piece while continuing to deliver new features to our customers without being burdened by the monolith.</p>

    <p>This often leads to a micro frontend architecture. Once a team experiences taking a feature to production with little modification in the old world, other teams will also want to join the new world. Existing code still needs to be maintained, and in some cases, it may make sense to continue adding new features to it, but now the choice is available.</p>

    <p>The end result here is that we have more freedom to make case-by-case decisions on individual parts of our product and make incremental updates to our architecture, dependencies, and user experience. If there is a major change to our main framework, each micro frontend can be updated when it makes sense, rather than being forced to stop everything and update all at once. If we want to experiment with new technology or new interaction modes, we can do so more isolated than before.</p>

    <h5>2. Simple and Decoupled Codebases</h5>
    <p>The codebase of each individual micro frontend will, by definition, be much smaller than the codebase of a single monolithic frontend. These smaller codebases tend to be simpler and easier for developers to work with. In particular, we avoid the complexity arising from unintended and improper coupling between components that should not know about each other. By drawing thicker lines around the bounded contexts of the application, we make it harder for this accidental coupling to arise.</p>

    <h5>3. Independent Deployment</h5>
    <p>As with microservices, the independent deployability of micro frontends is key. This reduces the scope of any specific deployment, which in turn reduces the associated risk. Regardless of how or where your frontend code is hosted, each micro frontend should have its own continuous delivery pipeline that builds, tests, and deploys it to production. We should be able to deploy each micro frontend with very little consideration given to the current state of other codebases or pipelines. It should not matter if the old monolith is on a fixed, manual quarterly release cycle, or if the team next door inserted a half-finished or broken feature into their main branch. If a particular micro frontend is ready to go to production, it should be able to do so, and that decision should be up to the team that built and maintains it.</p>

    <img src={TeamImg} alt="Autonomous Teams" className="img-fluid mb-3 center-img"  />

    <h4>Autonomous Teams</h4>

    <p>As a higher-order benefit of decoupling both our codebases and our release cycles, we make significant strides toward having fully independent teams capable of owning a section of a product from conception through production and beyond. Teams can have full ownership of everything they need to deliver value to customers, allowing them to move quickly and effectively. For this to work, our teams need to be formed around vertical slices of business functionality rather than technical capabilities. One easy way to do this is to divide the product based on what end users will see so that each micro frontend encapsulates a single page of the application and is fully owned by a single team. This brings greater cohesion to the teams work than if teams were formed around horizontal technical concerns like styling, forms, or validation.</p>

    <p className='mt-5'>
    <h4>References</h4>
      <ul>
          <li>https://micro-frontends.org</li>
          <li>https://martinfowler.com/articles/micro-frontends.html</li>
          <li>https://medium.com/@rajithacharith/introduction-to-micro-frontends-283aa1e126c5</li>
        </ul>
    </p>

    </CCardBody>
    </CCard>
      </CCol>
    </CRow>
  )
};
export default IntroducaoMicrofrontend;
