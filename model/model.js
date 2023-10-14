// page titles
var homeTitle = `eventsy | home`;
var aboutTitle = `eventsy | about`;
var galleryTitle = `eventsy | gallery`;
var blogTitle = `eventsy | blog`;
var contactTitle = `eventsy | contact`;
var foodTitle = `eventsy | food festival`
var djTitle = `eventsy | dee-jay`;
var speechTitle = `eventsy | speech`;
var openTitle = `eventsy | open foodfest`;
var internationalTitle = `eventsy | international`;
var blogJun6Title = `eventsy | blog | JUN 06`;
var blogJul30Title = `eventsy | blog | JUL 30`;
var blogAug30Title = `eventsy | blog | AUG 30`;
var blogNov23Title = `eventsy | blog | NOV 23`;
var blogDec23Title = `eventsy | blog | DEC 23`;

// html content for #app
var homeContent = `<section class="home">
<!-- hero -->
<section id="hero" class="hero">
  <h1>Header goes here</h1>
  <h3 class="subheader">Less important text goes here</h3>
  <h3 class="callout">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    <span>Fugiat aliquid minus nemo sed est.</span>
  </h3>
  <a id="readMoreAnchor" class="readMoreAnchor" href="">
    <div id="readMoreBTN" class="readMoreBTN">Read More</div>
  </a>
</section>

<!-- testimonial -->
<section id="testimonial" class="testimonial">
  <h4>
    “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium totam rem aperiam eaque ipsa quae
    ab illo inventore veritatis et quasi architecto beatae vitae dicta
    sunt explicabo. Iste natus error sit voluptatem accusantium
    doloremque laudantium totam rem aperiam eaque ipsa quae ab illo
    inventore veritatis et quasi architecto beatae vitae dicta sunt
    explicabo”
  </h4>
  <h5>John Smith</h5>
  <h6>Corporation CEO, books author.</h6>
</section>

<!-- upcoming events -->
<section id="events" class="events">
  <h1>upcoming events:</h1>
  <div id="eventGrid" class="eventGrid">
    <div id="eventContainer" class="eventContainer">
      <div id="eventLeft" class="eventLeft">
        <div class="dateBox" id="dateBox">
          <h3>06</h3>
          <h5>JUN</h5>
        </div>
      </div>
      <div id="eventRight" class="eventRight">
        <h5>Sed et persipiatis unde omnis iste natus</h5>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquid temporibus quos aspernatur
        </h6>
      </div>
    </div>
    <div id="eventContainer" class="eventContainer">
      <div id="eventLeft" class="eventLeft">
        <div class="dateBox" id="dateBox">
          <h3>30</h3>
          <h5>JUL</h5>
        </div>
      </div>
      <div id="eventRight" class="eventRight">
        <h5>Sed et persipiatis unde omnis iste natus</h5>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquid temporibus quos aspernatur
        </h6>
      </div>
    </div>
    <div id="eventContainer" class="eventContainer">
      <div id="eventLeft" class="eventLeft">
        <div class="dateBox" id="dateBox">
          <h3>30</h3>
          <h5>AUG</h5>
        </div>
      </div>
      <div id="eventRight" class="eventRight">
        <h5>Sed et persipiatis unde omnis iste natus</h5>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquid temporibus quos aspernatur
        </h6>
      </div>
    </div>
    <div id="eventContainer" class="eventContainer">
      <div id="eventLeft" class="eventLeft">
        <div class="dateBox" id="dateBox">
          <h3>23</h3>
          <h5>NOV</h5>
        </div>
      </div>
      <div id="eventRight" class="eventRight">
        <h5>Sed et persipiatis unde omnis iste natus</h5>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquid temporibus quos aspernatur
        </h6>
      </div>
    </div>
    <div id="eventContainer" class="eventContainer">
      <div id="eventLeft" class="eventLeft">
        <div class="dateBox" id="dateBox">
          <h3>23</h3>
          <h5>DEC</h5>
        </div>
      </div>
      <div id="eventRight" class="eventRight">
        <h5>Sed et persipiatis unde omnis iste natus</h5>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquid temporibus quos aspernatur
        </h6>
      </div>
    </div>
  </div>
</section>
</section>`;
var aboutContent = `<section class="about">
<div class="hero"></div>
<div class="content">
  <h1>our history:</h1>
  <p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
    quae ab illo inventore veritatis et quasi architecto beatae vitae
    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
    aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
    eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
    sed quia non numquam eius modi tempora incidunt ut labore et dolore
    magnam aliquam quaerat voluptatem.
  </p>
</div>
</section>`;
var galleryContent = `<section class="gallery">
<div class="headline">
  <h1>gallery:</h1>
</div>
<div class="galleryGrid">
  <div class="topRow">
    <a id="food" href="#"><div class="food"></div></a>
    <a id="dj" href="#"><div class="dj"></div></a>
    <a id="speech" href="#"><div class="speech"></div></a>
  </div>
  <div class="bottomRow">
    <a id="open" href="#"><div class="open"></div></a>
    <a id="international" href="#"><div class="international"></div></a>
  </div>
</div>
</section>`;
var blogContent = `<section class="blog">
<div class="headline">
  <h1>blog:</h1>
</div>
<div class="blogGrid">
  <a href="#" id="blogJun6">
    <div class="blogPostContainer">
      <div class="left">
        <div class="dateBox">
          <h3>06</h3>
          <h5>jun</h5>
        </div>
      </div>
      <div class="right">
        <div class="blogDateImageWrapper">
          <div class="hiddenDate">
            <h3>06</h3>
            <h5>jun</h5>
          </div>
          <div class="blogImage"></div>
        </div>
        <div class="blogText">
          <h4>Sed et persipiatis unde omnis iste natus</h4>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et
            quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
    </div>
  </a>
  <a href="#" id="blogJul30">
    <div class="blogPostContainer">
      <div class="left">
        <div class="dateBox">
          <h3>30</h3>
          <h5>jul</h5>
        </div>
      </div>
      <div class="right">
        <div class="blogDateImageWrapper">
          <div class="hiddenDate">
            <h3>30</h3>
            <h5>jul</h5>
          </div>
          <div class="blogImage"></div>
        </div>
        <div class="blogText">
          <h4>Sed et persipiatis unde omnis iste natus</h4>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et
            quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
    </div>
  </a>
  <a href="#" id="blogAug30">
    <div class="blogPostContainer">
      <div class="left">
        <div class="dateBox">
          <h3>30</h3>
          <h5>aug</h5>
        </div>
      </div>
      <div class="right">
        <div class="blogDateImageWrapper">
          <div class="hiddenDate">
            <h3>30</h3>
            <h5>aug</h5>
          </div>
          <div class="blogImage"></div>
        </div>
        <div class="blogText">
          <h4>Sed et persipiatis unde omnis iste natus</h4>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et
            quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
    </div>
  </a>
  <a href="#" id="blogNov23">
    <div class="blogPostContainer">
      <div class="left">
        <div class="dateBox">
          <h3>23</h3>
          <h5>nov</h5>
        </div>
      </div>
      <div class="right">
        <div class="blogDateImageWrapper">
          <div class="hiddenDate">
            <h3>23</h3>
            <h5>nov</h5>
          </div>
          <div class="blogImage"></div>
        </div>
        <div class="blogText">
          <h4>Sed et persipiatis unde omnis iste natus</h4>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et
            quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
    </div>
  </a>
  <a href="#" id="blogDec23">
    <div class="blogPostContainer">
      <div class="left">
        <div class="dateBox">
          <h3>23</h3>
          <h5>dec</h5>
        </div>
      </div>
      <div class="right">
        <div class="blogDateImageWrapper">
          <div class="hiddenDate">
            <h3>23</h3>
            <h5>dec</h5>
          </div>
          <div class="blogImage"></div>
        </div>
        <div class="blogText">
          <h4>Sed et persipiatis unde omnis iste natus</h4>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et
            quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
    </div>
  </a>
</div>
</section>`;
var contactContent = `<section class="contact">
<div class="headline">
  <h1>contact us:</h1>
</div>
<div class="contactWrapper">
  <form>
    <input
      type="text"
      name="name"
      id="name"
      placeholder="Your name..."
    />
    <input
      type="email"
      name="email"
      id="email"
      placeholder="Email Address..."
    />
    <input
      type="text"
      name="company"
      id="company"
      placeholder="Company..."
    />
    <textarea name="message" placeholder="Message..."></textarea>
    <a href="#"><div class="send">send message</div></a>
  </form>
  <div class="map">
    <img src="images/map.png" alt="map">
  </div>
</div>
</section>`;
var foodContent = `<section class="subGallery">
<div class="hero foodHero"></div>
<div class="callout foodCallout">
  <h1>1.<span> food festival</span></h1>
</div>
<div class="content">
  <div class="left">
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt.
    </p>
  </div>
  <div class="right">
    <p>
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit, sed quia non numquam eius modi
      tempora incidunt ut labore et dolore magnam aliquam quaerat
      voluptatem.
    </p>
  </div>
</div>
</section>`
var djContent = `<section class="subGallery">
<div class="hero djHero"></div>
<div class="callout djCallout">
  <h1>2.<span> dee-jay</span></h1>
</div>
<div class="content">
  <div class="left">
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt.
    </p>
  </div>
  <div class="right">
    <p>
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit, sed quia non numquam eius modi
      tempora incidunt ut labore et dolore magnam aliquam quaerat
      voluptatem.
    </p>
  </div>
</div>
</section>`;
var speechContent = `<section class="subGallery">
<div class="hero speechHero"></div>
<div class="callout speechCallout">
  <h1>3.<span> speech</span></h1>
</div>
<div class="content">
  <div class="left">
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt.
    </p>
  </div>
  <div class="right">
    <p>
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit, sed quia non numquam eius modi
      tempora incidunt ut labore et dolore magnam aliquam quaerat
      voluptatem.
    </p>
  </div>
</div>
</section>`;
var openContent = `<section class="subGallery">
<div class="hero openHero"></div>
<div class="callout openCallout">
  <h1>4.<span> open foodfest</span></h1>
</div>
<div class="content">
  <div class="left">
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt.
    </p>
  </div>
  <div class="right">
    <p>
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit, sed quia non numquam eius modi
      tempora incidunt ut labore et dolore magnam aliquam quaerat
      voluptatem.
    </p>
  </div>
</div>
</section>`;
var internationalContent = `<section class="subGallery">
<div class="hero internationalHero"></div>
<div class="callout internationalCallout">
  <h1>5.<span> international</span></h1>
</div>
<div class="content">
  <div class="left">
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt.
    </p>
  </div>
  <div class="right">
    <p>
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit, sed quia non numquam eius modi
      tempora incidunt ut labore et dolore magnam aliquam quaerat
      voluptatem.
    </p>
  </div>
</div>
</section>`;
var blogJun6Content = `<section class="subBlog">
<div class="hero">
  <div class="dateBox">
    <h3>06</h3>
    <h5>jun</h5>
  </div>
</div>
<div class="content">
  <h4>Header #1:</h4>
  <p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
    quae ab illo inventore veritatis et quasi architecto beatae vitae
    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
    aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
    eos qui ratione voluptatem sequi nesciunt.
  </p>
  <p>
    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
    consectetur, adipisci velit, sed quia non numquam eius modi tempora
    incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
  </p>
  <h4>Header #2:</h4>
  <p>
    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
    consectetur, adipisci velit, sed quia non numquam eius modi tempora
    incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
  </p>
</div>
</section>`;
var blogJul30Content = `<section class="subBlog">
<div class="hero">
  <div class="dateBox">
    <h3>30</h3>
    <h5>jul</h5>
  </div>
</div>
<div class="content">
  <h4>Header #1:</h4>
  <p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
    quae ab illo inventore veritatis et quasi architecto beatae vitae
    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
    aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
    eos qui ratione voluptatem sequi nesciunt.
  </p>
  <p>
    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
    consectetur, adipisci velit, sed quia non numquam eius modi tempora
    incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
  </p>
  <h4>Header #2:</h4>
  <p>
    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
    consectetur, adipisci velit, sed quia non numquam eius modi tempora
    incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
  </p>
</div>
</section>`;
var blogAug30Content = `<section class="subBlog">
<div class="hero">
  <div class="dateBox">
    <h3>30</h3>
    <h5>aug</h5>
  </div>
</div>
<div class="content">
  <h4>Header #1:</h4>
  <p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
    quae ab illo inventore veritatis et quasi architecto beatae vitae
    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
    aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
    eos qui ratione voluptatem sequi nesciunt.
  </p>
  <p>
    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
    consectetur, adipisci velit, sed quia non numquam eius modi tempora
    incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
  </p>
  <h4>Header #2:</h4>
  <p>
    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
    consectetur, adipisci velit, sed quia non numquam eius modi tempora
    incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
  </p>
</div>
</section>`;
var blogNov23Content = `<section class="subBlog">
<div class="hero">
  <div class="dateBox">
    <h3>23</h3>
    <h5>nov</h5>
  </div>
</div>
<div class="content">
  <h4>Header #1:</h4>
  <p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
    quae ab illo inventore veritatis et quasi architecto beatae vitae
    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
    aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
    eos qui ratione voluptatem sequi nesciunt.
  </p>
  <p>
    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
    consectetur, adipisci velit, sed quia non numquam eius modi tempora
    incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
  </p>
  <h4>Header #2:</h4>
  <p>
    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
    consectetur, adipisci velit, sed quia non numquam eius modi tempora
    incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
  </p>
</div>
</section>`;
var blogDec23Content = `<section class="subBlog">
<div class="hero">
  <div class="dateBox">
    <h3>23</h3>
    <h5>dec</h5>
  </div>
</div>
<div class="content">
  <h4>Header #1:</h4>
  <p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
    quae ab illo inventore veritatis et quasi architecto beatae vitae
    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
    aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
    eos qui ratione voluptatem sequi nesciunt.
  </p>
  <p>
    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
    consectetur, adipisci velit, sed quia non numquam eius modi tempora
    incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
  </p>
  <h4>Header #2:</h4>
  <p>
    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
    consectetur, adipisci velit, sed quia non numquam eius modi tempora
    incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
  </p>
</div>
</section>`;
// END html content for #app

// logos
var whiteLogo = 'images/logos/eventsy-logo-white.png';
var blackLogo = 'images/logos/eventsy-logo-black.png';

// export to change view, page title, and nav color
export function changePageContent(pageID){
    let pageName = pageID + "Content"; 
    $("#app").html(eval(pageName)); // changes content
    let pageTitle = pageID + "Title";
    $("title").html(eval(pageTitle)); // changes title

    // change nav colors based on page view
    if(pageID == "home") {
      $(".header-wrapper").removeClass("whiteBG");
      $(".header-wrapper .navContainer").removeClass("blackBorder");
      $(".header-wrapper .full-size a").removeClass("blackText");
      $('#dynamicLogo').attr('src', whiteLogo);
    } else {
      $(".header-wrapper").removeClass("homeNav");
      $(".header-wrapper").addClass("whiteBG");
      $(".header-wrapper .navContainer").addClass("blackBorder");
      $(".header-wrapper .full-size a").addClass("blackText");
      $('#dynamicLogo').attr('src', blackLogo);
    }
}

// funtion to change transparent fixed header to white on scroll
$(window).scroll(function () {
  var fullWidthHeader = $(".header-container .header-wrapper");
  fullWidthHeader.toggleClass('homeNav', $(this).scrollTop() > 30);
});