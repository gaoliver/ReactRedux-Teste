export function toggleLesson(module, lesson) {
  return {
    type: "TOGGLE_LESSON",
    module,
    lesson,
  };
}

export function aumentar() {
  return {
    type: "AUMENTAR",
  }
}

export function diminuir() {
  return {
    type: "DIMINUIR"
  }
}
