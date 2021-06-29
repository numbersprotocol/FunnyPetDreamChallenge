/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-unresolved, import/extensions, import/no-extraneous-dependencies */
import React, { Component } from 'react';
import {
  FacebookShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
  TumblrShareCount,
  HatenaShareCount,
  FacebookShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  WeiboShareButton,
  PocketShareButton,
  InstapaperShareButton,
  HatenaShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
  TumblrIcon,
  MailruIcon,
  EmailIcon,
  LivejournalIcon,
  ViberIcon,
  WorkplaceIcon,
  LineIcon,
  PocketIcon,
  InstapaperIcon,
  WeiboIcon,
  HatenaIcon,
} from 'react-share';

import './MoreShare.css';
import exampleImage from '../../img/OGimg.png';

class MoreShare extends Component {
  render() {
    const shareUrl = 'https://numbersprotocol.github.io/FunnyPetDreamChallenge/';
    const title = '#FunnyPetDreamChallenge';

    return (
      <div className="MoreShare__container flex flex-row flex-wrap">
        <div className="MoreShare__some-network">
          <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="MoreShare__some-network__share-button"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <div>
            <FacebookShareCount url={shareUrl} className="MoreShare__some-network__share-count">
              {count => count}
            </FacebookShareCount>
          </div>
        </div>

        <div className="MoreShare__some-network">
          <FacebookMessengerShareButton
            url={shareUrl}
            appId="521270401588372"
            className="MoreShare__some-network__share-button"
          >
            <FacebookMessengerIcon size={32} round />
          </FacebookMessengerShareButton>
        </div>

        <div className="MoreShare__some-network">
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="MoreShare__some-network__share-button"
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>

          <div className="MoreShare__some-network__share-count">&nbsp;</div>
        </div>

        <div className="MoreShare__some-network">
          <TelegramShareButton
            url={shareUrl}
            title={title}
            className="MoreShare__some-network__share-button"
          >
            <TelegramIcon size={32} round />
          </TelegramShareButton>

          <div className="MoreShare__some-network__share-count">&nbsp;</div>
        </div>

        <div className="MoreShare__some-network">
          <WhatsappShareButton
            url={shareUrl}
            title={title}
            separator=":: "
            className="MoreShare__some-network__share-button"
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>

          <div className="MoreShare__some-network__share-count">&nbsp;</div>
        </div>

        <div className="MoreShare__some-network">
          <LinkedinShareButton url={shareUrl} className="MoreShare__some-network__share-button">
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </div>

        <div className="MoreShare__some-network">
          <PinterestShareButton
            url={String(window.location)}
            media={`${String(window.location)}/${exampleImage}`}
            className="MoreShare__some-network__share-button"
          >
            <PinterestIcon size={32} round />
          </PinterestShareButton>

          <div>
            <PinterestShareCount url={shareUrl} className="MoreShare__some-network__share-count" />
          </div>
        </div>

        <div className="MoreShare__some-network">
          <VKShareButton
            url={shareUrl}
            image={`${String(window.location)}/${exampleImage}`}
            className="MoreShare__some-network__share-button"
          >
            <VKIcon size={32} round />
          </VKShareButton>

          <div>
            <VKShareCount url={shareUrl} className="MoreShare__some-network__share-count" />
          </div>
        </div>

        <div className="MoreShare__some-network">
          <OKShareButton
            url={shareUrl}
            image={`${String(window.location)}/${exampleImage}`}
            className="MoreShare__some-network__share-button"
          >
            <OKIcon size={32} round />
          </OKShareButton>

          <div>
            <OKShareCount url={shareUrl} className="MoreShare__some-network__share-count" />
          </div>
        </div>

        <div className="MoreShare__some-network">
          <RedditShareButton
            url={shareUrl}
            title={title}
            windowWidth={660}
            windowHeight={460}
            className="MoreShare__some-network__share-button"
          >
            <RedditIcon size={32} round />
          </RedditShareButton>

          <div>
            <RedditShareCount url={shareUrl} className="MoreShare__some-network__share-count" />
          </div>
        </div>

        <div className="MoreShare__some-network">
          <TumblrShareButton
            url={shareUrl}
            title={title}
            className="MoreShare__some-network__share-button"
          >
            <TumblrIcon size={32} round />
          </TumblrShareButton>

          <div>
            <TumblrShareCount url={shareUrl} className="MoreShare__some-network__share-count" />
          </div>
        </div>

        <div className="MoreShare__some-network">
          <LivejournalShareButton
            url={shareUrl}
            title={title}
            description={shareUrl}
            className="MoreShare__some-network__share-button"
          >
            <LivejournalIcon size={32} round />
          </LivejournalShareButton>
        </div>

        <div className="MoreShare__some-network">
          <MailruShareButton
            url={shareUrl}
            title={title}
            className="MoreShare__some-network__share-button"
          >
            <MailruIcon size={32} round />
          </MailruShareButton>
        </div>

        <div className="MoreShare__some-network">
          <EmailShareButton
            url={shareUrl}
            subject={title}
            body="body"
            className="MoreShare__some-network__share-button"
          >
            <EmailIcon size={32} round />
          </EmailShareButton>
        </div>
        <div className="MoreShare__some-network">
          <ViberShareButton
            url={shareUrl}
            title={title}
            className="MoreShare__some-network__share-button"
          >
            <ViberIcon size={32} round />
          </ViberShareButton>
        </div>

        <div className="MoreShare__some-network">
          <WorkplaceShareButton
            url={shareUrl}
            quote={title}
            className="MoreShare__some-network__share-button"
          >
            <WorkplaceIcon size={32} round />
          </WorkplaceShareButton>
        </div>

        <div className="MoreShare__some-network">
          <LineShareButton
            url={shareUrl}
            title={title}
            className="MoreShare__some-network__share-button"
          >
            <LineIcon size={32} round />
          </LineShareButton>
        </div>

        <div className="MoreShare__some-network">
          <WeiboShareButton
            url={shareUrl}
            title={title}
            image={`${String(window.location)}/${exampleImage}`}
            className="MoreShare__some-network__share-button"
          >
            <WeiboIcon size={32} round />
          </WeiboShareButton>
        </div>

        <div className="MoreShare__some-network">
          <PocketShareButton
            url={shareUrl}
            title={title}
            className="MoreShare__some-network__share-button"
          >
            <PocketIcon size={32} round />
          </PocketShareButton>
        </div>

        <div className="MoreShare__some-network">
          <InstapaperShareButton
            url={shareUrl}
            title={title}
            className="MoreShare__some-network__share-button"
          >
            <InstapaperIcon size={32} round />
          </InstapaperShareButton>
        </div>

        <div className="MoreShare__some-network">
          <HatenaShareButton
            url={shareUrl}
            title={title}
            windowWidth={660}
            windowHeight={460}
            className="MoreShare__some-network__share-button"
          >
            <HatenaIcon size={32} round />
          </HatenaShareButton>

          <div>
            <HatenaShareCount url={shareUrl} className="MoreShare__some-network__share-count" />
          </div>
        </div>
      </div>
    );
  }
}

export default MoreShare;