import React from 'react';
import { useEffect, useState } from 'react';
import { getQuotes } from '../api';
import { getAssetsUrl } from '../assets';
import { IconBlog, IconGithub, IconJueJin } from '../icon';

interface HomeProps {
  /**
   * @description 标题
   * @default Home 🔥
   */
  title?: string;
  /**
   * @description 右侧图片
   * @default imgDoraemon
   */
  img?: string;
  /**
   * @description 每日一句来源
   * @default one
   */
  api?: 'one' | 'iciba' | 'shanbay' | 'hitokoto' | 'storm' | 'jinrishici';
}

const Home: React.FC<HomeProps> = ({ title = 'Home 🔥', img = getAssetsUrl('jpg', 38), api }) => {
  const [quotes, setQuotes] = useState<any>([]);

  useEffect(() => {
    getQuotes().then((res) => setQuotes(res.data.content_list));
  }, []);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="lg:pr-10">
          <h5 className="mb-4 text-4xl font-extrabold leading-none">{title}</h5>
          <p className="mb-6 text-gray-900">
            {quotes.map((quote: any) => (
              <span className="inline-block mb-2"> - {quote.forward}</span>
            ))}
          </p>
          <hr className="mb-5 border-gray-300" />
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/rick-chou"
              target="_blank"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <IconGithub />
            </a>
            <a
              href="https://juejin.cn/user/1574156383563496"
              target="_blank"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <IconJueJin />
            </a>
            <a
              target="_blank"
              href="https://luckychou.gitbook.io/blog"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <IconBlog />
            </a>
          </div>
        </div>
        <div>
          <img className="object-cover w-full h-56 rounded shadow-lg sm:h-96" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
