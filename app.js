$(".product-carousel").hide();
$(".cart-container").hide();
$(".cart-product").hide();

let containerHeight;
let containerWidth;

$(".icon-cart, .cart-product-count").click(function () {
  $("#navbarSupportedContent").removeClass("show");

  containerHeight = $(".original-carousel").height();
  containerWidth = $(".original-carousel").width();
  if ($(window).width() >= 576) {
    containerHeight = 0.7 * containerHeight;
    containerWidth = 0.8 * containerWidth;
  } else if ($(window).width() >= 984) {
    containerWidth = 0.95 * containerWidth;
  } else {
    containerHeight = 0.9 * containerHeight;
    containerWidth = 0.95 * containerWidth;
  }

  $(".cart-container").toggle();
  $(".cart-container").animate({ height: containerHeight }, 500);
  $(".cart-container").animate({ width: containerWidth }, 500);
});

$(".navbar-toggler-icon").click(function () {
  $(".cart-container").hide();
});

let totalPrice;
let priceProduct;
let productCount;

$(".img-minus").click(function () {
  productCount = $(".product-count").text();
  if (productCount > 0) {
    productCount = productCount - 1;
    $(".product-count").text(productCount);
  }
});

$(".img-plus").click(function () {
  productCount = $(".product-count").text();

  if (productCount < 4) {
    productCount = ++productCount;
    $(".product-count").text(productCount);
  }
});

$(".add-to-cart").click(function () {
  productCount = parseInt($(".product-count").text());
  priceProduct = $(".price-product").text();

  let numericPrice = parseFloat(priceProduct.replace(/[^\d.]/g, ""));
  // to replace $ from priceProduct

  console.log("numericPrice: ", numericPrice);

  if (!isNaN(numericPrice) && productCount != 0) {
    $("#navbarSupportedContent").removeClass("show");

    containerHeight = $(".original-carousel").height();
    containerWidth = $(".original-carousel").width();
    if ($(window).width() >= 576) {
      containerHeight = 0.7 * containerHeight;
      containerWidth = 0.8 * containerWidth;
    } else if ($(window).width() >= 984) {
      containerWidth = 0.95 * containerWidth;
    } else {
      containerHeight = 0.9 * containerHeight;
      containerWidth = 0.95 * containerWidth;
    }
    $(".cart-container").slideDown();
    $(".cart-container").animate({ height: containerHeight }, 500);
    $(".cart-container").width(containerWidth);

    /*
    containerHeight = $(".carousel-item").height();
    containerWidth = $(".carousel-item").width();
    containerHeight = 0.9 * containerHeight;
    containerWidth = 0.95 * containerWidth;
    
*/
    $(".cart-empty").hide();
    $(".cart-product").show();

    $(".cart-product-count").show();
    $(".cart-product-count").text(productCount);

    totalPrice = numericPrice * productCount;

    // prettier-ignore
    $(".price-checkout").html(
      "$" + numericPrice + " X " + productCount + " " + `<h3>$` + totalPrice + `</h3>`
    );

    console.log("total Price " + totalPrice);
  }
});

$(".icon-delete").click(function () {
  $(".cart-product").hide();
  $(".cart-empty").slideDown();
  $(".cart-product-count").hide();
  $(".cart-product-count").text("");
});

$(".icon-close").click(function () {
  $(".navbar-nav").toggle();
  $("main").removeClass("dimmed");
});

$(".navbar-toggler").click(function () {
  $(".navbar-nav").show();
  navbarHeight = $("main").height() + $("header").height();
  $(".navbar-nav").animate({ height: navbarHeight }, 500);
  $("main").addClass("dimmed");
});

$("#navbarSupportedContent").removeClass("collapse");

/* FOR SCREEN WIDTH GREATER THAN 576 PX*/

$(".thumbnail, .product-thumbnail").click(function () {
  if ($(window).width() >= 576) {
    var imageUrl = $(this).attr("src");
    console.log(imageUrl);

    imageUrl = imageUrl.replace("-thumbnail", "");
    console.log("modifiedUrl " + imageUrl);

    console.log(imageUrl);

    $(".product").attr("src", imageUrl);

    // desktop-carousel
    $(".active img").attr("src", imageUrl);
  }
});

$(".product").click(function () {
  if ($(window).width() >= 576) {
    $(".carousel-desktop").css("display", "flex");
  }
});

$(".carousel-close").click(function () {
  // $("#productCarousel").hide();
  if ($(window).width() >= 576) {
    $(".carousel-desktop").css("display", "none");
  }
});
