import React from 'react';
import { Skill } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

const SkillCard = ({
  loading,
  skills,
}: {
  loading: boolean;
  skills: Skill[];
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 12; index++) {
      array.push(
        <div key={index}>
          {skeleton({ widthCls: 'w-20', heightCls: 'h-8', className: 'm-1' })}
        </div>,
      );
    }
    return array;
  };

  return (
    <div className="card shadow-lg card-sm bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">Tech Stack</span>
            )}
          </h5>
        </div>
        <div className="p-3 flow-root">
          <div className="-m-1 flex flex-wrap justify-center gap-3">
            {loading
              ? renderSkeleton()
              : skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-2 px-3 py-2 rounded-xl bg-base-200 hover:bg-base-300 hover:scale-105 transition-all duration-200 cursor-default"
                    title={skill.name}
                  >
                    {skill?.icon &&
                      React.createElement(skill?.icon, {
                        size: 18,
                        style: { color: skill.color },
                        className:
                          'transition-transform duration-200 group-hover:scale-110',
                      })}
                    <span className="text-xs font-medium text-base-content">
                      {skill.name}
                    </span>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
