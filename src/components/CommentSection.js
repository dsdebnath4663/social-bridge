import React, { useState } from 'react';


const CommentSection = () => {

  const Comment = ({ name, time, text, imageUrl, replies }) => {
    return (
      <div className="d-flex flex-row ">
        <div className="p-2">
          <img
            src={imageUrl}
            className="rounded-circle icon-md"
            alt={name}
          />
        </div>
        <div className="p-2 flex-fill">
          <div className="form-floating position-relative">
            <div className="bg-light h-auto py-2 px-3 custom-textarea rounded-2">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="fw-bolder mb-0">{name}</p>
                </div>
                <div className="opacity-50">{time}</div>
              </div>
              <small className="opacity-50 font mt-1">{text}</small>
            </div>

          </div>

          {replies && replies.length > 0 && (
            <ul className="list-group ">
              {replies.map((reply, index) => (
                <li className="list-group-item border-0" key={index}>
                  <Comment {...reply} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };

  const NestedComment = () => {
    const comments = [
      {
        name: 'Ramu Soren',
        time: '2hr',
        text:
          'Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.',
        imageUrl: 'https://img.freepik.com/free-photo/portrait-smiling-young-man-with-his-arm-crossed-standing-against-orange-backdrop_23-2148119780.jpg',
        replies: [
          {
            name: 'Amit Kumar',
            time: '1hr',
            text:
              'Yes, I totally agree with you. The situation is getting worse.',
            imageUrl: "https://img.freepik.com/free-photo/beautiful-woman-standing-against-yellow-wall_23-2148204587.jpg",
            replies: [
              {
                name: 'Sita Devi',
                time: '30min',
                text: 'Absolutely! It’s time for a change.',
                imageUrl: "https://img.freepik.com/premium-photo/smiling-woman-with-tablet-computer_78203-628.jpg",
                replies: [],
              },
            ],
          },
          {
            name: 'Shyam Sundar',
            time: '1hr',
            text: 'Couldn’t agree more!',
            imageUrl: "https://img.freepik.com/premium-photo/bicyclist-man-model_1028654-14601.jpg",
            replies: [],
          },
        ],
      },
      {
        name: 'Priya Mehta',
        time: '3hr',
        text: 'I have a different opinion about this topic.',
        imageUrl: "https://img.freepik.com/free-photo/woman-with-arms-crossed-laughing_23-2148666473.jpg",
        replies: [],
      },
    ];

    return (
      <ul className="list-group border-0">
        {comments.map((comment, index) => (
          <li className="list-group-item border-0" key={index}>
            <Comment {...comment} />
          </li>
        ))}
      </ul>
    );
  };



  return (
    <div className="container mt-4 nested-comment">
      <NestedComment />
    </div>
  );
};

export default CommentSection;
