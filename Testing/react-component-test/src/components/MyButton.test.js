import {render} from "@testing-library/react";
import MyButton from "./MyButton";

describe("MyButton Component Test (@testing-library/react)", () => {
  test("Component가 정상적으로 생성됩니다.", () => {
    expect(render(<MyButton/>)).not.toBe(null)
  })
})
