import { Component, Host, Element, h } from '@stencil/core';

@Component({
  tag: 'first-web-component',
  styleUrl: 'first-web-component.css',
  shadow: true
})

export class FirstWebComponent {

  @Element() el: HTMLElement;

  /*animation*/
  menuAnimation() {  
    const toggleImg = this.el.shadowRoot.querySelector("#show-menu");
    
    if (toggleImg.classList) {
      toggleImg.classList.toggle("active");
      this.openMenu();
    } else {
      let addClass = toggleImg.className.split(" ");
      
      let i = addClass.indexOf("active");

      if (i >= 0) 
        addClass.splice(i, 1);
      else 
        addClass.push("active");
      toggleImg.className = addClass.join(" ");
    }
  };

/*open menu*/
  openMenu() {
    let opacityWrap = this.el.shadowRoot.querySelector("#bg-opacity");
    let mobileWrap = this.el.shadowRoot.querySelector("#menu-wrapper");

    if (opacityWrap.classList) { 
      opacityWrap.classList.toggle("showOpacity");
      mobileWrap.classList.toggle("showMenu");
    } else {
      let addClass = mobileWrap.className.split(" ");

      let i = addClass.indexOf("showMenu");

      if (i >= 0) 
        addClass.splice(i, 1);
      else 
        addClass.push("showMenu");
      opacityWrap.className = addClass.join(" ");
      mobileWrap.className = addClass.join(" ");
    }
  }

  render() {
    return (
    <Host>
      <div id="bg-opacity"></div>
      <div id="wrapper">
        <div id="show-menu" class="start-menu" onClick={() => this.menuAnimation()}>
          <span class="chevron"></span>
        </div>
        <div id="menu-wrapper">
          <div id="swipe-cmpnt" class="">
            <p>Select one of the options below</p>
            <ul>
              <li><a href="#">Menu <span>Option 1</span></a></li>
              <li><a href="#">Menu <span>Option 2</span></a></li>
              <li><a href="#">Menu <span>Option 3</span></a></li>
              <li><a href="#">Menu <span>Option 4</span></a></li>
              <li><a href="#"><span class="far fa-life-ring"></span>Help Center</a></li>
            </ul>
          </div>
        </div>
      </div>
    </Host>
    );
  }
}
