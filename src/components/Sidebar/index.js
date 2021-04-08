import React from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";

import * as CourseAction from "../../store/actions";

const Sidebar = ({ modules, dispatch }) => (
  <aside>
    {modules.map((module) => (
      <div key={module.id}>
        <strong>{module.title}</strong>
        <ul>
          {module.lessons.map((lesson) => (
            <li key={lesson.id} style={{ marginBottom: 10 }}>
              <Button
                color="primary"
                style={{ marginLeft: 10 }}
                onClick={() =>
                  dispatch(CourseAction.toggleLesson(module, lesson))
                }
              >
                {lesson.title}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
);

export default connect((state) => ({ modules: state.course.modules }))(Sidebar);
