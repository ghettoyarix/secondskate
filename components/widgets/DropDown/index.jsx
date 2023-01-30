import React from 'react';

const options = [
  {
    title: 'Рози',
    value: 'roses',
    subOptions: [
      { title: 'Рози', value: 'roses' },
      { title: 'Тюльпани', value: 'tulips' },
      { title: 'Іриси', value: 'iris' },
      { title: 'Букет', value: 'mix' },
    ],
  },
  {
    title: 'Букети',
    value: 'buquetes',
    subOptions: [
      { title: 'Рози', value: 'roses' },
      { title: 'Тюльпани', value: 'tulips' },
      { title: 'Іриси', value: 'iris' },
      { title: 'Букет', value: 'mix' },
    ],
  },
  {
    title: 'Букети',
    value: 'buquetes',
    subOptions: [
      { title: 'Рози', value: 'roses' },
      { title: 'Тюльпани', value: 'tulips' },
      { title: 'Іриси', value: 'iris' },
      { title: 'Букет', value: 'mix' },
    ],
  },
];
const index = () => {
  return (
    <div class="group left-[-120px]  top-4 pb-12  inline-block relative z-10">
      <ul class="absolute outline outline-2   outline-purple top-[30px] min-w-[240px] hidden text-gray-700  group-hover:block">
        {options.map((obj) => (
          <li class="">
            <a
              class="  group bg-white w-full text-black hover:bg-purple hover:text-white  py-2 px-4 inline-block whitespace-no-wrap"
              href="#">
              {obj.title}
            </a>
            <ul
              class="absolute left-[240px] outline outline-2   outline-purple  
             min-w-[240px] hidden text-gray-700 group-hover:block">
              {obj.subOptions.map((obj) => (
                <li class="">
                  <a
                    class="   bg-white w-full text-black hover:bg-purple
                     hover:text-white  py-2 px-4 inline-block whitespace-no-wrap"
                    href="#">
                    {obj.title}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default index;
