import React from "react";
import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";
import heroSliderData from "../assets/fake-data/hero-silder";
import Section, { SectionTitle, SectionBody } from "../components/Section";
import Grid from "../components/Grid";
import { Link } from "react-router-dom";
import PolicyCard from "../components/PolicyCard";
import policy from "../assets/fake-data/policy";
import productData from "../assets/fake-data/products";
import ProductCard from "../components/ProductCard";

import banner from "../assets/images/banner.png";
import banner1 from "../assets/images/banner-1.jpeg";
const Home = () => {


  return (
    <Helmet title="Trang chủ">
      {/* Hero Slider */}
      <HeroSlider
        data={heroSliderData}
        control={true}
        auto={false}
        timeOut={5000}
      />
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policy.map((item, index) => (
              <Link key={index} to="/policy">
                <PolicyCard
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Top sản phẩm bán chạy trong tuần</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(4).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              ></ProductCard>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      <Section>
        <SectionBody>
          <Link to="/catalog">
            <img src={banner1} alt="" style={{ width: "100%",maxWidth:"100%" }}></img>
          </Link>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Sản phẩm mới </SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(8).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              ></ProductCard>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      <Section>
        <SectionBody>
          <Link to="/catalog">
            <img src={banner} alt="" style={{ width: "100%" ,maxWidth:"100%"}}></img>
          </Link>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Tất cả sản phẩm</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(8).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              ></ProductCard>
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Home;
