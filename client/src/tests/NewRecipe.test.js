/*import React from "react";
import "@testing-library/jest-dom/extend-expect"
import { shallow, render } from "@testing-library/react";
import LandingPage from "../components/landing page/LandingPage";




describe("LandingPage", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = render(<LandingPage />);
    });
    it('Renderizar componente', () => {
        const { asFragment } = component;
        expect(asFragment()).toMatchSnapshot();
    });
    it("Renderiza un <h1>", () => {
        expect(wrapper.getByText("Home »")).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "name"', () => {
        El orden en el que se encuentran los Labels es importante.
        expect(wrapper.find("label").at(0).text()).toEqual("name");
    });

    it('Renderiza un input con la propiedad "name" igual a "title"', () => {
        expect(wrapper.find('input[name="title"]')).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "summary"', () => {
        El orden en el que se encuentran los Labels es importante.
        expect(wrapper.find("label").at(1).text()).toEqual("summary");
    });

    it('Renderiza una textarea con la propiedad "name" igual a "summary"', () => {
        expect(wrapper.find('textarea[name="summary"]')).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "score"', () => {
        El orden en el que se encuentran los Labels es importante.
        expect(wrapper.find("label").at(2).text()).toEqual("score");
    });

    it('Renderiza un input con la propiedad "name" igual a "score"', () => {
        expect(wrapper.find('input[name="score"]')).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "healthScore"', () => {
        El orden en el que se encuentran los Labels es importante.
        expect(wrapper.find("label").at(3).text()).toEqual("healthScore");
    });

    it('Renderiza un input con la propiedad "name" igual a "healthScore"', () => {
        expect(wrapper.find('input[name="healthScore"]')).toHaveLength(1);
    });

    it('Renderiza un boton con el "type" "submit"', () => {
        expect(wrapper.find('button[type="submit"]')).toHaveLength(1);
    });
});
*/